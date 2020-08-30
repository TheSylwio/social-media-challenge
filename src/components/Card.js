import React from "react";
import IconDown from '../assets/icon-down.svg';
import IconUp from '../assets/icon-up.svg';
import './Card.css';

function Card(props) {
  return (
    <div className='card'>
      <div className="card__title">
        <img src={props.icon} alt=""/>
        <span>{props.username}</span>
      </div>
      <div className="card__counter">
        <span className="counter__number">{props.number}</span>
        <span className="counter__description">{props.description}</span>
      </div>
      <div className="card__stats">
        <img src={props.isSuccess ? IconUp : IconDown} alt=''/>
        <span className={props.isSuccess ? 'card__stats--success' : 'card__stats--warning'}>{props.difference}</span>
      </div>
    </div>
  );
}

export default Card;