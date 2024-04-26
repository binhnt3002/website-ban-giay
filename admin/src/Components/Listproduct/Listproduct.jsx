import { useEffect, useState } from 'react'
import './Listproduct.css'
import cross_icon from '../../assets/cross_icon.png'
import '../Addproduct/Addproduct.css'



const Listproduct = (props) => {
    const [allproducts,setAllProducts] = useState([]);
    const [editSection,setEditSection] = useState(false)

    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:"",
        image:"",
        category:"",
        new_price:"",
        old_price:"",
        id:""
    })
    const imageHandler = async (e) => {
        setImage(e.target.files[0]);
    }

    const changeHandler = async (e) =>{
      setProductDetails({...productDetails,[e.target.name]:e.target.value})
      
    }

    const HandleEditSection =  async (e) =>{
      const {value,name } = e.target
      setProductDetails((preve) => {
        return{
          ...preve,
          [name]:value
        }
      })
    }


    const fetchAllData = async () =>{
      await fetch('http://localhost:4444/allproduct')
        .then((res) => res.json())
        .then((data) => {setAllProducts(data)})
    }
  
    useEffect(() => {
      fetchAllData()
    },[])

    const update_product = async (id,e) => {
      e.preventDefault()

      // let product = productDetails; //copy of the product object

      // let formData = new FormData();
      // formData.append('product',image);

      // await fetch('http://localhost:4444/upload',{
      //   method:'POST',
      //   headers:{
      //     Accept:'Application/json',
      //   },
      //   body:formData,
      // }).then((resp) => resp.json()).then((data) => {responseData = data})

      
        await fetch('http://localhost:4444/editproduct',{
          method:'PUT',
          headers:{
            Accept:'application/json',
            'content-type' : 'application/json',
          },
          body:JSON.stringify({id:id},productDetails)
        })  
        await fetchAllData();
    }


    const remove_product = async (id) => {
      if(await confirm("are you sure ?")){
        await fetch('http://localhost:4444/removeproduct',{
          method:'DELETE',
          headers:{
            Accept:'application/json',
            'content-type' : 'application/json',
          },
          body:JSON.stringify({id:id})
        })  
        await fetchAllData();
      }
    }

    const OpentEditSectionHandler = (el) =>{
      setProductDetails(el)
      setEditSection(true)
    }

    const CloseEditSectionHandler = () =>{
      setEditSection(false)
    }

  
  return (
    <div className="list-product">
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>option</p>
      </div>
      <div className="list-product-allproducts">
        <hr />
        {allproducts.map((product,i) => {
          return <>
          <div key={i} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className='listproduct-product-icon' />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <button className='edit-btn' onClick={() => {
              setEditSection(true)
              setProductDetails(product)}}
              >edit</button>
            <img  onClick={() => {remove_product(product.id)}} src={cross_icon} alt="" className='300' />
            {
              editSection && (<div className='addproduct'>
              <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={product.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
              </div>
              <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='Type here' />
                </div>
              </div>
              <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                    <option value="women">Women</option>
                    <option value="men">men</option>
                    <option value="kid">kid</option>
                </select>
              </div>
              <div className="addproduct-itemfield">
                <label htmlFor="file-input">
                    <img src={image?URL.createObjectURL(image):product.image} className='addproduct-thumbnail-img' alt="" />
                </label>
                    <input onChange={imageHandler} type="file" name='image' id='file-input' hidden/>
              </div>
              <button onClick={()=>{update_product(product.id,product.name);window.location.reload()}} className='addproduct-btn'>update</button>
            </div>
                          
            )}
          </div>
          <hr />
          </>
        })}
      </div>
    </div>
  )
}

export default Listproduct
