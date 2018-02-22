import React, {Component} from 'react';
import Header from './Header';
import About from './About';
import SpeakerGrid from './SpeakerGrid';
import Schedule from './Schedule';
import Carousel from './Carousel';
import Footer from './Footer';
import Sponsors from './Sponsors';
import Faq from './Faq';
import '../scss/Main.scss';


export default class Main extends Component {

  render() {
    return (
      <div className=''>
        <Header />
        {/* <About />
        <SpeakerGrid />
        <Schedule />
        <Faq />
        <Sponsors />
        <Carousel />
        <Footer /> */}
      </div>
    )
  }
}
