import './Editproduct.css'




const Editproduct = () => {
  
 

  return <>
   <div className='addproduct'>
              <button onClick={Closehandler}>close</button>
              <div className="addproduct-itemfield">
                <p>Product title</p>
                <input value={props.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
              </div>
              <div className="addproduct-price">
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={props.old_price} onChange={changeHandler} type="number" name='old_price' placeholder='Type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={props.new_price} onChange={changeHandler} type="number" name='new_price' placeholder='Type here' />
                </div>
              </div>
              <div className="addproduct-itemfield">
                <p>Product Category</p>
                <select value={props.category} onChange={changeHandler} name="category" className='add-product-selector'>
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
              <button onClick={() => {clickedHandler}} className='addproduct-btn'>Add</button>
            </div>
  </>
}

export default Editproduct
