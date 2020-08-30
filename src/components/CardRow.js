import React from "react";
import Card from "./Card";
import SmallCard from "./SmallCard";
import './CardRow.css';

function CardRow(props) {
  return (
    <div className='cardRow'>
      <header className='cardRow__header'>{props.header}</header>
      {props.smallCards ? props.cards.map((card, index) => (
          <SmallCard
            key={index}
            icon={card.icon}
            title={card.title}
            number={card.number}
            difference={card.difference}
            isSuccess={card.isSuccess}
          />
        )) :
        props.cards.map((card, index) => (
          <Card
            key={index}
            icon={card.icon}
            username={card.username}
            description={card.description}
            number={card.number}
            difference={card.difference}
            isSuccess={card.isSuccess}
          />
        ))}
    </div>
  );
}

export default CardRow;