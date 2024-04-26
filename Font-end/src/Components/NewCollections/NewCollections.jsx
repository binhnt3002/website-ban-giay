import './NewCollections.css'
import Items from '../Items/Items'
import { useEffect, useState } from 'react'
import {Element} from 'react-scroll'


const NewCollections = () => {
  const [new_collections,setNewCollections] = useState([]);


  useEffect(() => {
    fetch('http://localhost:4444/newcollection')
    .then((response) => response.json())
    .then((data) => setNewCollections(data))
  },[])


  return (
    <Element name='new collection'>
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {new_collections.map((item,i) => {
            return <Items key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
      </Element>
  )
}

export default NewCollections
