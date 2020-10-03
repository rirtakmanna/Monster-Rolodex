import React from "react";
import "./Card.style.scss";

const Card = (props) => (
  <div className='card'>
    <img
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
      alt='Monster'
    />
    <h2 className='card__tittle'>{props.monster.name}</h2>
    <p className='card__para'>{props.monster.email}</p>
    <p className='card__para'>{props.monster.website}</p>
  </div>
);

export default Card;
