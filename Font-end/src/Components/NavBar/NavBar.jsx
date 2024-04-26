import React, { useRef, useState } from 'react'
import './NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'


const NavBar = () => {

    const [menu,setMenu]  = useState("shop") 
    const {getTotalCartItem} = useContext(ShopContext);
    const menuRef = useRef();
    
    const dropdown_toggle = (e) =>{
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
    
    return (
        <div className='navbar'>
            <div className='nav-logo'>  
                <Link to='/'><img src={logo} alt=''/></Link>
            </div>
            <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
            <ul ref={menuRef} className="nav-menu">
                <li onClick={() => {setMenu("shop")}}><Link style={{ textDecoration : 'none' ,  color: 'inherit' }} to='/shop'>Shop</Link>{menu === "shop" ?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link style={{ textDecoration : 'none' ,  color: 'inherit' }} to='/mens'>Men</Link>{menu === "mens" ?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link style={{ textDecoration : 'none' ,  color: 'inherit' }} to ='/womens'>Women</Link>{menu === "womens" ?<hr/>:<></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link style={{ textDecoration : 'none' ,  color: 'inherit' }} to ='/kids'>Kids</Link>{menu === "kids" ?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                {localStorage.getItem('auth-token')
                ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
                :<Link style={{ textDecoration : 'none' ,  color: 'inherit' }} to='/login'><button>Login</button></Link>}
                <Link style={{ textDecoration : 'none' ,  color: 'inherit' }} to='/cart'><img src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    )
}

export default NavBar;