import './Footer.css'
import footer_logo from '../Assets/big_logo.png'
import insta_icon from '../Assets/instagram_icon.png'
import pintes_icon from '../Assets/pintester_icon.png'
import whatapp_icon from '../Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt=''/>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='social-container'>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={insta_icon} alt=' '/>
        </div>
        <div className="footer-icons-container">
            <img src={pintes_icon} alt=' '/>
        </div>
        <div className="footer-icons-container">
            <img src={whatapp_icon} alt=' '/>
        </div>
      </div>
      </div>

      
      <div className="footer-copyright">
        <p>Copyright @ 2024 - All Right Reversed.</p>
      </div>
      
    </div>
  )
}

export default Footer
