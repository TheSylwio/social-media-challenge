import React from "react";
import IconUp from "../assets/icon-up.svg";
import IconDown from "../assets/icon-down.svg";
import './SmallCard.css';

function SmallCard(props) {
  return (
    <div className="card card--small">
      <div className="card__row">
        <span className="card__title">{props.title}</span>
        <img src={props.icon} alt=""/>
      </div>
      <div className="card__row">
        <span className="card__number">{props.number}</span>
        <div className="card__description">
          <img src={props.isSuccess ? IconUp : IconDown} alt=""/>
          <span className={props.isSuccess ? 'card__stats--success' : 'card__stats--warning'}>{props.difference}</span>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;