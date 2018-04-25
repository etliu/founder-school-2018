import React, {Component} from 'react';
import '../scss/Sponsors.scss';

export default class Sponsors extends Component {

  render() {
    return (
      <div id="sponsors" className="sponsors">
        <div className="containers">
          <div className="header-title">Sponsors</div>
          <div className="section">
            <div className="sponsors-grid lower">
              <div className="sponsor-tile" id="reslife"><a href="https://reslife.ucla.edu/"><img src="./assets/sponsors/reslife.png"/></a></div>
              <div className="sponsor-tile"><a href="http://www.uclaacm.com/#/"><img src="./assets/sponsors/acm.png"/></a></div>
              <div className="sponsor-tile"><a href="https://upe.seas.ucla.edu/"><img src="./assets/sponsors/upe.png"/></a></div>
            </div>
            <div className="sponsors-grid">
              <div className="sponsor-tile" id="anderson"><a href="https://www.anderson.ucla.edu/"><img src="./assets/sponsors/anderson.png"/></a></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
