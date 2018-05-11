import React from 'react';
import SpeakerTile from './SpeakerTile';
import '../scss/SpeakerGrid.scss';
// Can't mix import and module.exports


const speakers = {
   'omar': {
     'name': 'Omar Hamoui',
     'title': 'Partner @ Sequoia Capital',
     'logo': './assets/logos/2018/sequoiacapital.jpg',
     'uri': './assets/headshots/2018/omar_full.png',
     'site': 'https://www.sequoiacap.com/people/omar-hamoui/',
   },
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
  'susie': {
    'name': 'Susie Kim',
    'title': 'CCO @ Pluto Money',
    'logo': './assets/logos/2018/pluto_money.png',
    'uri': './assets/headshots/2018/susie_full.png',
    'site': 'https://gopluto.io/',
  },
  'alex': {
    'name': 'Alex Capecelatro',
    'title': 'CEO @ Josh.ai',
    'logo': './assets/logos/2018/josh_ai.jpg',
    'uri': './assets/headshots/2018/AlexCapecelatro.png',
    'site': 'https://www.josh.ai/',
  },
  'ann': {
    'name': 'Ann Wang',
    'title': 'CEO & Co-Founder @ Enrou',
    'logo': './assets/logos/2018/enrou.jpg',
    'uri': './assets/headshots/2018/ann_full.png',
    'site': 'https://enrou.co/',
  },
  'jessica': {
    'name': 'Jessica Willson',
    'title': 'Co-Founder @ Enrou',
    'logo': './assets/logos/2018/enrou.jpg',
    'uri': './assets/headshots/2018/jessica_full.png',
    'site': 'https://enrou.co/',
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
