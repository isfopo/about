import React from "react";
import headshot from "../images/headshot.png";
import windchimes from "../images/windchime-icon.png";
import lofiRider from "../images/lofi-rider-icon.png";
import tecIcon from "../images/tec-icon.png";
import "../App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="header-image-container">
          <img className="header-image" src={headshot} alt="Headshot" />
          <div className="name-container">
            <h1>
              Isaac
              <br />
              Poole
            </h1>
          </div>
        </div>

        <div className="header-text">
          <div className="bio">
            <h2>
              A technology-driven musician and aspiring developer trying to
              learn everything I can
            </h2>
            <hr />
          </div>

          <div className="contact">
            <h3 className="phone-number">502.220.8265</h3>

            <div className="links">
              <ul>
                <li>
                  <a href="mailto: isaac.f.poole@gmail.com">
                    isaac.f.poole@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/isaacpoole">
                    linkedin.com/in/isaacpoole
                  </a>
                </li>
                <li>
                  <a href="https://github.com/isfopo">github.com/isfopo</a>
                </li>
              </ul>
            </div>
            <div className="projects">
              <a href="https://isfopo.github.io/windchimes">
                <img src={windchimes} alt="Windchimes" />
              </a>
              <a href="https://isfopo.itch.io/lofi-rider">
                <img src={lofiRider} alt="lofi-rider" />
              </a>
              <a href="https://these-elements-combined.com/">
                <img src={tecIcon} alt="these-elements-combined" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="main-text">
        <div className="credentials">
          <div className="strengths">
            <hr />
            <h4 className="cred-type">Strengths</h4>
            <ul className="cred-list">
              <div className="col-1">
                <li>Learner</li>
                <li>Intellection</li>
                <li>Input</li>
              </div>
              <div className="col-2">
                <li>Connectedness</li>
                <li>Ideation</li>
              </div>
            </ul>
          </div>

          <div className="education">
            <hr />
            <h4 className="cred-type">Education</h4>

            <div className="cred-container">
              <h5 className="cred-location">codeLouisville / JCTC</h5>
              <h6 className="cred-description">
                Web Development React Tract & UX/UI
              </h6>
              <p className="cred-time">August 2019 - July 2020</p>
            </div>

            <div className="cred-container">
              <h5 className="cred-location">University of Louisville</h5>
              <h6 className="cred-description">
                Bachelor’s in Music Performance <br /> Minor in Socio-cultural
                Anthropology
              </h6>
              <p className="cred-time">August 2010 - December 2014</p>
            </div>
          </div>

          <div className="skills">
            <hr />
            <h4 className="cred-type">Skills</h4>
            <ul className="cred-list">
              <li>JavaScript and React</li>
              <li>HTML and CSS</li>
              <li>Max/MSP</li>
              <li>DSP/Audio Processing</li>
              <li>UX/UI Research and Design</li>
              <li>Customer Service</li>
              <li>Problem Solving</li>
              <li>Retail and Sales</li>
              <li>Written Communication</li>
            </ul>
          </div>

          <div className="experience">
            <hr />
            <h4 className="cred-type">Experience</h4>

            <div className="cred-container">
              <h5 className="cred-location">Doo Wop Shop</h5>
              <h6 className="cred-description">
                Head Guitar Technician and Retail Associate
              </h6>
              <p className="cred-time">February 2015 - March 2020</p>
              <p className="cred-blurb">
                Inherited a guitar repair department losing money in undone
                repairs on customer and in-house instruments and organized,
                stocked and monetized guitar services while improving store
                stock.
              </p>
            </div>
            <div className="cred-container">
              <h5 className="cred-location">University of Louisville</h5>
              <h6 className="cred-description">Production Coordinator</h6>
              <p className="cred-time">November 2014 - September 2019</p>
              <p className="cred-blurb">
                Established rapport with professors and performers at the School
                of Music to create a seamless concert experience and backstage
                flow for each event at Comstock and Bird Hall.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className="App-footer">
        <ul>
          <li>
            <a href="mailto: isaac.f.poole@gmail.com">email</a>
          </li>
          <li>|</li>
          <li>
            <a href="https://www.linkedin.com/in/isaacpoole">linkedin</a>
          </li>
          <li>|</li>
          <li>
            <a href="https://github.com/isfopo">github</a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
