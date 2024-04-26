import './Navbar.css'

import navProfile from '../../assets/administration.png'


const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>Admin</h1>
      <img src={navProfile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar
