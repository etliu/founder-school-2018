import React from 'react';
import SpeakerTile from './SpeakerTile';
import '../scss/SpeakerGrid.scss';
// Can't mix import and module.exports


const speakers = {
  'eugene': {
    'name': 'Eugene Marinelli',
    'title': 'Co-Founder and CTO @ Blend',
    'logo': './assets/logos/2017/bsolid.png',
    'uri': './assets/headshots/2017/EugeneMarinelli.jpg',
    'site': 'https://blend.com',
  },
  'angelia': {
    'name': 'Angelia Trinidad',
    'title': 'Founder and CEO @ Passion Planner',
    'logo': './assets/logos/2017/PassionPlanner.png',
    'uri': './assets/headshots/2017/AngeliaTrinidad.jpg',
    'site': 'http://www.passionplanner.com/',
  },
  'jacob': {
    'name': 'Jacob Jaber',
    'title': 'CEO @ Philz Coffee',
    'logo': './assets/logos/2017/philz.png',
    'uri': './assets/headshots/2017/JacobJaber.jpg',
    'site': 'http://www.philzcoffee.com/',
  },
  'jaclyn': {
    'name': 'Jaclyn Fu',
    'title': 'Co-Founder @ Pepper',
    'logo': './assets/logos/2017/pepperbra.jpg',
    'uri': './assets/headshots/2017/JaclynFu.jpg',
    'site': 'https://www.my-pepper.com/',
  },
  'frank': {
    'name': 'Frank Donner',
    'title': 'Founder and CEO @ BLKBX Creative Group',
    'logo': './assets/logos/2017/blkbxsolid.png',
    'uri': './assets/headshots/2017/FrankDonner.jpg',
    'site': 'http://blkbxcg.com/',
  },
  'cassidy': {
    'name': 'Cassidy Williams',
    'title': 'Senior Software Engineer @ L4 Digital',
    'logo': './assets/logos/2017/l4solid.png',
    'uri': './assets/headshots/2017/CassidyWilliams.jpg',
    'site': 'https://l4digital.com',
  },
  'lina': {
    'name': 'Lina Chen',
    'title': 'Co-Founder and CEO @ Nix Hydra',
    'logo': './assets/logos/2017/nixhydra.png',
    'uri': './assets/headshots/2017/LinaChen.jpg',
    'site': 'http://www.nixhydra.com/',
  },
  'bryan': {
    'name': 'Bryan Ciambella',
    'title': 'Principal @ B Capital',
    'logo': './assets/logos/2017/bcapital.png',
    'uri': './assets/headshots/2017/BryanCiambella.jpeg',
    'site': 'http://www.bcapgroup.com/',
  },
};

function createGrid() {
  var grid = [];

  var numSpeakers = 0;
  for (var speaker in speakers) {
    var speakerData = speakers[speaker];
    var key = speakerData['name'];

    grid.push(
      <SpeakerTile key={key} name={key} title={speakerData['title']}
                   logo={speakerData['logo']} uri={speakerData['uri']}
                   site={speakerData['site']} />
    );
    numSpeakers++;
  }

  return grid;
}

export default class SpeakerGridOld extends React.Component {
  render() {
    return (
      <div id="speakers" className="speakers">
        <div className="header-title">Speakers</div>
        <div className="speaker-grid section">
          {createGrid()}
        </div>
      </div>
    );
  }
}