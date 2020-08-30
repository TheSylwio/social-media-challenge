import React from "react";
import IconDown from '../assets/icon-down.svg';
import IconUp from '../assets/icon-up.svg';
import IconFacebook from "../assets/icon-facebook.svg";
import IconTwitter from "../assets/icon-twitter.svg";
import IconInstagram from "../assets/icon-instagram.svg";
import IconYoutube from "../assets/icon-youtube.svg";
import './Card.css';

function Card(props) {
  const getSocialMediaStyle = () => {
    switch (props.icon) {
      case IconFacebook:
        return 'card--facebook';
      case IconTwitter:
        return 'card--twitter';
      case IconInstagram:
        return 'card--instagram ';
      case IconYoutube:
        return 'card--youtube';
    }
  }

  return (
    <div className={`card ${getSocialMediaStyle()}`}>
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