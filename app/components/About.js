import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
require('../scss/About.scss');

let left_background_styles = {
    background: 'url(assets/compass.jpg)',
    backgroundSize: '659px 345px',
    backgroundRepeat: 'no-repeat',
};

export default Watch(class About extends Component {
  render() {

    let left_anim = this.props.isInViewport ? " appear" : "";
    let right_anim = this.props.isInViewport ? " come-in" : "";

    return (
      <section id="about" className="about-wrapper">
        <div className="container about-container">
          <div className={"left" + left_anim}>
            {/*div className="compass"><i className="fa fa-compass"></i></div>*/}
            <div className="explore-background">
              <div className="explore-gradient"></div>
              <div className="explore-image" style={left_background_styles}></div>
            </div>
            <div id="where">
              <div id="where-title"><span>Where</span><br /><br /></div>
              <span class="about-location-content">
                <p>Carnesale Commons</p>
                <p>UCLA, Los Angeles, CA</p><br />
              </span>
            </div>
            <div id="when">
              <div id="when-title"><span>When</span><br /><br /></div>
              <span class="about-location-content">
                <p>Sunday 9AM - 5PM</p>
                <p>May 12th, 2017</p><br />
              </span>
            </div>
          </div>
          <div className={"right" + right_anim}>
              <h2>UCLA Founder's School</h2>
              <p>Founder's School is the largest university entrepreneurship conference in Southern California hosted by UCLA ACM and UPE. We are bringing together over 200 students, engineers, founders, investors, professionals, and professors to share their own stories and build meaningful connections.</p>
              <br />
              <p>Our theme for this year is <span>exploration</span>. We believe in the following:</p>
              <br />
              <blockquote><i>"It's human nature to stretch, to go, to see, to understand. Exploration is not a choice really; it's an imperative."</i></blockquote>
              <blockquote id="michaelcollins">- Michael Collins</blockquote>
          </div>

        </div>
      </section>
    )
  }
});
