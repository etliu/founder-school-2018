import React, {Component} from 'react';
import HeaderOld from './HeaderOld';
import About from './About';
import SpeakerGridOld from './SpeakerGridOld';
import ScheduleOld from './ScheduleOld';
import Carousel from './Carousel';
import Footer from './Footer';
import Sponsors from './Sponsors';
import Faq from './Faq';
import '../scss/Main.scss';


export default class MainOld extends Component {

  render() {
    return (
      <div className=''>
        <HeaderOld />
        <About />
        <SpeakerGridOld />
        <ScheduleOld />
        <Faq />
        <Sponsors />
        <Carousel />
        <Footer />
      </div>
    )
  }
}