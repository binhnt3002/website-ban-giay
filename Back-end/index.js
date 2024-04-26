const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
require("dotenv").config()
const PORT = process.env.PORT
const mongodbLink = process.env.MONGO_STRINS_CONNECT


app.use(express.json());
app.use(cors());

// DataBase Connection MongoDB
// mongoose.connect("mongodb+srv://tanbinh159:Ping123@cluster0.lpysknq.mongodb.net/e-commerce");
mongoose.connect(mongodbLink)


//create function that reuse the locahost url
function getLocalhostUrl(port,path1,path2) {
    if(path2 == ""){
        return `http://localhost:${port}/${path1}`;
    }else{
        return `http://localhost:${port}/${path1}/${path2}`;
    }
}



// API Creation

app.get("/", (req,res) =>{
    res.send("Express dang chay")
})

//Img Store engine
const storage = multer.diskStorage({
    destination: './upload/',
    filename: (req,file,cb) => {
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    },
})

const upload = multer({storage:storage})

//endpoint for upload img
app.use('/images',express.static('upload/images'))

app.post("/upload",upload.single('product'), (req,res) => {
    const imageUrl = getLocalhostUrl(PORT,"images", req.file.filename);
    console.log(imageUrl);
    res.json({
        success:1,
        image_url: imageUrl,
    })
})

// Schema product
const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required: true,
    },
    name:{
        type : String,
        required: true,
    },
    image:{
        type : String,
        required: true,
    },
    category:{
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date:{
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
}) 



//add product
app.post('/addproduct',async (req,res) => {
    let products = await Product.find({});
    let id;

    if (products.length > 0 ) {
        let last_product_arr = products.slice(-1);
        let last_product = last_product_arr[0];
        id = last_product.id + 1;
    }else{
        id = 1;
    }

    
    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price,
    })
    console.log(product);
    await product.save();
    console.log("SAVED");
    res.json({
        success: true,
        name : req.body.name,
    })
})


//Remove product 
app.delete('/removeproduct', async (req,res) => {
    await Product.findOneAndDelete({id:req.body.id},req.body);
    console.log("removed");
    res.json({
        success: true,
        name:req.body.name,
    })
})
 



app.put('/editproduct', async (req,res) => {

    const {id,...rest}  =req.body
    await Product.updateOne({id:id},rest)
    console.log("Edited");
    res.json({
        success: true,
        name:req.body,
    })
   
})


//Fetch data
app.get("/allproduct",async (req,res) => {
    let products = await Product.find({});
    console.log("all product Fetch");
    res.send(products);
})

// User Schema model 
const Users = mongoose.model('Users',{
    name:{
        type: String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type: Date,
        default: Date.now,
    }
})


// endpoint register user
app.post('/signup',async (req,res) =>{
    let check = await Users.findOne({email:req.body.email});
    
    if (check) {
        return res.status(400).json({succes:false,errors:"existing user found with the same email address"})
    }
    
    let cart = {};
    
    for (let i = 0; i < 300; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({sucess:true,token})
    

})


//user login endpoint
app.post('/login', async (req,res) => {
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const pasCompare = req.body.password === user.password;
        if (pasCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({sucess:true,token});
        }
        else{
            res.json({sucess:false,errors:"Wrong password"});
        }
    }
    else{
        res.json({success:false,errors:"User doesn't exist"})
    }
})


//endpoint for new collection
app.get('/newcollection',async (req,res)=> {
    let products = await Product.find({});
    let newCollection = products.slice(1).slice(-8);
    console.log("New Collection Fetch");
    res.send(newCollection);
})


//endpoint women shoe section
app.get('/popularinwomen', async (req,res) => {
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetch");
    res.send(popular_in_women);
})


//create middleware
const fetchUser = async (req,res,next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({errors:"Please authencate using valid token"})

    }else{
        try {
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).send({errors:"please athenticate using valid tokent"})
        }
    }
}

//endpoint for add to cart
app.post('/addtocart',fetchUser, async (req,res) => {
    console.log("added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Added")
})


//endpoint to remove item cart
app.post('/removefromcart',fetchUser, async (req,res) =>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if (userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
    res.send("Removed")
})


//endpoint to get cartdata
app.post('/getcart',fetchUser,async (req,res) => {
    console.log("get cart");
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
    
})

app.listen(PORT,(e) => {
    if (!e) {
        console.log("Server run on Port " + PORT);
    }else{
        console.log(e);
    }
});