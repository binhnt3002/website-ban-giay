import './DescriptionBox.css'



const DescriptionBox = () => {
  return (
    <div className='desbox'>
      <div className="desbox-navigator">
        <div className="desbox-nav-box">Description</div>
        <div className="desbox-nav-box fade">Reviews (123)</div>
      </div>
      <div className="desbox-description">
        <p>this is description</p>

        <p>
            this is description too
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
