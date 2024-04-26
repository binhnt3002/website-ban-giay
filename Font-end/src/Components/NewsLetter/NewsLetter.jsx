import './NewsLetter.css'



const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newleter and stay updated</p>
      <div>
        <input type='email' placeholder='Your email'/>
        <button>Subcribe</button>
      </div>
    </div>
  )
}

export default NewsLetter ;
