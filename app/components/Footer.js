import React from 'react';
import Scrollchor from 'react-scrollchor';
import '../scss/Footer.scss';

export default class Footer extends React.Component {
  render() {
    let animeStyle = {
      offset: -35,
    };

    return (
      <footer className="footer">
        <div className="container">
          <div className="left">
            <div className="logo">
              <img src="./assets/Logo.png" alt=""/>
            </div>
            <div className="hosts">
              Hosted by
              <br/>
              <strong>UCLA <a href="http://www.uclaacm.com/#/">ACM</a> & <a href="https://upe.seas.ucla.edu/">UPE</a></strong>
            </div>
            <div className="social">
              <span className="connect">Connect with us</span>
              <a href="https://www.facebook.com/UCLAFoundersSchool/"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/uclafs"><i className="fa fa-twitter"></i></a>
              <a href="mailto:uclafoundersschool@gmail.com?Subject=Thanks%20for%20your%20interest%20in%20Founders%20School%202016!"><i className="fa fa-envelope"></i></a>
            </div>
          </div>
          <div className="right">
            <ul className="inline">
              <li><Scrollchor to="#about" animate={animeStyle}>About</Scrollchor></li>
              <li><Scrollchor to="#speakers" animate={animeStyle}>Speakers</Scrollchor></li>
              <li><Scrollchor to="#schedule" animate={animeStyle}>Schedule</Scrollchor></li>
              <li><Scrollchor to="#faq" animate={animeStyle}>Faq</Scrollchor></li>
              <li><Scrollchor to="#sponsors" animate={animeStyle}>Sponsors</Scrollchor></li>
              <li><span className="apply"><a href="https://uclafoundersschool.typeform.com/to/G7VxEU">Apply</a></span></li>
            </ul>

          </div>
        </div>
        <div className="container">
          <div className="copyright">
            &copy; Copyright 2017 | Made with <span className="heart">♥</span> in Los Angeles
          </div>
        </div>

      </footer>
    )
  }
}
