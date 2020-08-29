import React from "react";
import Card from "./Card";
import IconFacebook from '../assets/icon-facebook.svg';
import IconInstagram from '../assets/icon-instagram.svg';
import IconTwitter from '../assets/icon-twitter.svg';
import IconYoutube from '../assets/icon-youtube.svg';
import './CardRow.css';

function CardRow() {
  return (
    <div className='cardRow'>
      <Card
        icon={IconFacebook}
        username='@nathanf'
        description='followers'
        number='1987'
        difference='12 today'
        isSuccess
      />
      <Card
        icon={IconTwitter}
        username='@nathanf'
        description='followers'
        number='1044'
        difference='99 today'
        isSuccess
      />
      <Card
        icon={IconInstagram}
        username='@realnathanf'
        description='followers'
        number='11k'
        difference='1099 today'
        isSuccess
      />
      <Card
        icon={IconYoutube}
        username='Nathan F.'
        description='subscribers'
        number='8239'
        difference='144 today'
      />
    </div>
  );
}

export default CardRow;