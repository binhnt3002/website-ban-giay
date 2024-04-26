import { Link } from 'react-router-dom';
import logoNike from '../Components/Assets/nike_logo.png'
import './CSS/Home.css'


const Home = () => {
  return (
    <>
    <div className='logo-nike'>
      <img src={logoNike} alt='' />
      <Link to='/shop' style={{ textDecoration : 'none' ,  color: 'inherit' }}><button >Shop now</button></Link>
    </div>
    </>
  )
}

export default Home;
