import './Sidebar.css'
import { Link } from 'react-router-dom'
import add_product from '../../assets/new-product.png'
import list_product_icon from '../../assets/package.png'


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration:"none",color: 'inherit' }}>
        <div className="sidebar-item">
            <img src={add_product} alt="" />
            <p>New Product</p>
        </div>
      </Link>

      
      <Link to={'/listproduct'} style={{textDecoration:"none",color: 'inherit' }}>
        <div className="sidebar-item">
            <img src={list_product_icon} alt="" />
            <p>List Products</p>
        </div>
      </Link>
    </div>
  )
}

export default Sidebar
