import React from 'react';
import SpeakerTile from './SpeakerTile';
import '../scss/SpeakerGrid.scss';
// Can't mix import and module.exports


const speakers = {
  // 'omar': {
  //   'name': 'Omar Hamoui',
  //   'title': 'Partner @ Sequoia Capital',
  //   'logo': './assets/logos/2018/sequoiacapital.jpg',
  //   'uri': './assets/headshots/2018/OmarHamoui.png',
  //   'site': 'https://www.sequoiacap.com/people/omar-hamoui/',
  // },
  'grant': {
    'name': 'Grant Hosford',
    'title': 'Cofounder @ codeSpark',
    'logo': './assets/logos/2018/codespark.jpg',
    'uri': './assets/headshots/2018/GrantHosford.jpg',
    'site': 'http://www.codespark.org/',
  },
  'harsh': {
    'name': 'Harsh Vathsangam',
    'title': 'CEO @ Moving Analytics',
    'logo': './assets/logos/2018/movinganalytics.jpg',
    'uri': './assets/headshots/2018/HarshVathsangam.jpg',
    'site': 'https://www.movinganalytics.com',
  },
  'sanketh': {
    'name': 'Sanketh Katta',
    'title': 'CTO @ Smartcar',
    'logo': './assets/logos/2018/smartcar.png',
    'uri': './assets/headshots/2018/SankethKatta.jpg',
    'site': 'https://smartcar.com',
  },
  'alaina': {
    'name': 'Alaina Percival',
    'title': 'CEO @ Women Who Code',
    'logo': './assets/logos/2018/womenwhocode.jpg',
    'uri': './assets/headshots/2018/AlainaPercival.jpg',
    'site': 'https://www.womenwhocode.com',
  },
  // 'victor': {
  //   'name': 'Victor Santos',
  //   'title': 'CEO @ Airfox',
  //   'logo': './assets/logos/2018/airfox.jpg',
  //   'uri': './assets/headshots/2018/VictorSantos.png',
  //   'site': 'https://airfox.com',
  // },
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

export default class SpeakerGrid extends React.Component {
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
