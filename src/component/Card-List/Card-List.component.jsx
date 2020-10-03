import React from "react";
import Card from "../Card/Card.component";
import "./Card-List.style.scss";

const CardList = (props) => (
  <div className='card-list'>
    {props.monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;
