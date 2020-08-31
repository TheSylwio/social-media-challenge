import React, {useState} from 'react';
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

  const smallCards = [
    {
      icon: IconFacebook,
      title: 'Page Views',
      number: '87',
      difference: '3%',
      isSuccess: true
    },
    {
      icon: IconFacebook,
      title: 'Likes',
      number: '52',
      difference: '2%',
      isSuccess: false
    },
    {
      icon: IconInstagram,
      title: 'Likes',
      number: '5462',
      difference: '2257%',
      isSuccess: true
    },
    {
      icon: IconInstagram,
      title: 'Profile Views',
      number: '52k',
      difference: '1375%',
      isSuccess: true
    },
    {
      icon: IconTwitter,
      title: 'Retweets',
      number: '117',
      difference: '303%',
      isSuccess: true
    },
    {
      icon: IconTwitter,
      title: 'Likes',
      number: '507',
      difference: '553%',
      isSuccess: true
    },
    {
      icon: IconYoutube,
      title: 'Likes',
      number: '107',
      difference: '19%',
      isSuccess: false
    },
    {
      icon: IconYoutube,
      title: 'Total Views',
      number: '1407',
      difference: '12%',
      isSuccess: false
    }
  ];

  const [darkMode, toggleDarkMode] = useState(false)

  const changeTheme = () => {
    toggleDarkMode(prevState => !prevState);
    document.body.style.background = darkMode ? 'none' : '#20222F';
  }

  return (
    <div className={`app${darkMode ? ' app--dark' : ''}`}>
      <Banner changeTheme={changeTheme}/>
      <CardRow cards={bigCards}/>
      <CardRow cards={smallCards} header='Overview - Today' smallCards/>
    </div>
  );
}

export default App;
