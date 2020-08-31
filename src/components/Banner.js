import React from "react";
import './Banner.css';

function Banner({changeTheme}) {
  return (
    <div className='banner'>
      <div className="banner__info">
        <h1 className="banner__info--primary">Social Media Dashboard</h1>
        <h2 className="banner__info--secondary">Total Followers: 23,004</h2>
      </div>
      <hr/>
      <div className="banner__toggle">
        <label htmlFor="darkModeButton">Dark Mode</label>
        <div className="toggle__wrapper">
          <input id="darkModeButton" className="toggle__button" type="checkbox"
                 onClick={changeTheme}/>
        </div>
      </div>
    </div>
  );
}

export default Banner;