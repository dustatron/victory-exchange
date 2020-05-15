import React from 'react';
import { Card } from 'react-bootstrap';
import oldPoster2 from '../../img/oldPoster2.gif';
import oldPoster3 from '../../img/OldPoster3.jpg';
import shovel from '../../img/Shovel.jpg';
import handOff from '../../img/HandOff.jpg';
import './home.css';

function Home(props) {
  return (
    <React.Fragment>
      <div className="grid-container">
        <div className="header-box">
          <img className="header-box--img" src={handOff} />
          <div className="header-box--title"> Victory Exchange </div>
        </div>

        <div className="deet1">
          <p>
            Victory gardens were vegetable, fruit, and herb gardens planted at private residences and public parks in
            the United States, United Kingdom, Canada, Australia and Germany during World War I and World War II.{' '}
            <a href="https://en.wikipedia.org/wiki/Victory_garden" target="_blank">
              Read More
            </a>
          </p>
        </div>
        <div className="image1">
          <img src={oldPoster3} />
        </div>
        <div className="image2">
          <img src={shovel} />
        </div>
        <div className="div5">Some info here would be good.</div>
        <div className="div6">
          <img src={oldPoster2} />
        </div>
        <div className="div7">
          <img src={oldPoster2} />
        </div>
      </div>
    </React.Fragment>
  );
}

// Home.propTypes = {};

export default Home;
