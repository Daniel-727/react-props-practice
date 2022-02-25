import React from 'react';


function Card(props) {
  return(
    <div>

      <div className="card">
        <div className="top">
          <h2 className='name'>{props.name}</h2> {/*getting the name of the person for the card from our props argument, same with our image, phone, and email*/}
          <img 
            className='circle-img'
            src={props.image}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{props.phone}</p>
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  )
}

export default Card;