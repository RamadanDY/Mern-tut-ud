import React from 'react'
import './Useritem.css'
/// the props.image is where we stored the image in so we just call it here using props
const Useritem = (props) => {
  return (
    <li className='user-item'>
        <div className="user-item__content">
            <div className="user-item__image">
                <img src={props.image} alt={props.name}  />
            </div>
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.placeCount}  {props.placeCount === 0 ? 'place' : 'places'}</h3>
                {/* check if placeCount is === equal to zero then print place : or places . in this case placeCount is === to 3 so we print 3 places if its 0 we print 0 place/*/}
            </div>

        </div>
    </li>
  )
}

export default Useritem