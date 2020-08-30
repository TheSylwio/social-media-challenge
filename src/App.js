import React from 'react';
import Banner from "./components/Banner";
import CardRow from "./components/CardRow";
import './App.css';
import IconFacebook from "./assets/icon-facebook.svg";
import IconTwitter from "./assets/icon-twitter.svg";
import IconInstagram from "./assets/icon-instagram.svg";
import IconYoutube from "./assets/icon-youtube.svg";

function App() {
  const bigCards = [
    {
      icon: IconFacebook,
      username: '@nathanf',
      number: '1987',
      description: 'followers',
      difference: '12 today',
      isSuccess: true
    },
    {
      icon: IconTwitter,
      username: '@nathanf',
      number: '1044',
      description: 'followers',
      difference: '99 today',
      isSuccess: true
    },
    {
      icon: IconInstagram,
      username: '@realnathanf',
      number: '11k',
      description: 'followers',
      difference: '1099 today',
      isSuccess: true
    },
    {
      icon: IconYoutube,
      username: 'Nathan F.',
      number: '8239',
      description: 'subscribers',
      difference: '144 today',
      isSuccess: false
    }
  ]

  return (
    <div className='app'>
      <Banner/>
      <CardRow cards={bigCards}/>
      <CardRow cards={bigCards} header='Overview - Today' smallCards/>
    </div>
  );
}

export default App;
