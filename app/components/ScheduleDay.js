import React from 'react';
import '../scss/Schedule.scss';

let web_styles = {
  "row1": {
    "15": {
      width: "3.125%",
      textAlign: "center",
    },
    "30": {
      width: "6.25%",
    },
    "45": {
      width: "9.375%",
    },
    "45+5gap": {
      width: "9.375%",
      marginRight: "1.042%",
    },
    "45+15gap": {
      width: "9.375%",
      marginRight: "3.125%",
    },
    "60": {
      width: "12.5%",
    },
    "60+10gap": {
      width: "12.5%",
      marginRight: "2.083%",
    },
    "75": {
      width: "15.625%",
    },
    "75+15gap": {
      width: "15.625%",
      marginRight: "3.125%",
    },
  },
  "row2": {
    "first_sessions": {
      marginLeft: "27.083%",
      width: "9.375%",
    },
    "second_sessions": {
      marginLeft: "15.625%",
      width: "9.375%",
    },
    "third_sessions": {
      marginLeft: "3.125%",
      width: "9.375%",
    },
  },
  "closing": <i className="fa fa-gift" title="Closing Statements"></i>,
}

let mobile_styles = {
  "row1": {
    "15": {
      height: "13px",
    },
    "30": {
      height: "26px",
    },
    "45": {
      height: "41px",
    },
    "45+5gap": {
      height: "41px",
      marginBottom: "4px",
    },
    "45+15gap": {
      height: "41px",
      marginBottom: "13px",
    },
    "60": {
      height: "52px",
    },
    "60+10gap": {
      height: "52px",
      marginBottom: "9px",
    },
    "75": {
      height: "65px",
    },
    "75+15gap": {
      height: "65px",
      marginBottom: "13px",
    },
  },
  "row2": {
    "first_sessions": {
      marginTop: "115px",
      height: "41px",
    },
    "second_sessions": {
      marginTop: "65px",
      height: "41px",
    },
    "third_sessions": {
      marginTop: "13px",
      height: "41px",
    },
  },
  "closing": "Closing",
}

export default class ScheduleDay extends React.Component {
  render() {
    let active_style = web_styles;
    if (window.innerWidth < 790) {
      active_style = mobile_styles;
    }

    return (
      <div className="schedule-day">
        <div className="timeline-table">
          <div className="timeline-row">
            <div className="timeline-block foodNew" style={active_style["row1"]["45"]}>Check-In</div>
            <div className="timeline-block talkNew" style={active_style["row1"]["15"]}>Opening</div>
            <div className="timeline-block talkNew" style={active_style["row1"]["60+10gap"]}>Keynote #1</div>
            <div className="timeline-block breakoutNew" style={active_style["row1"]["45+5gap"]}>Breakout Session #1</div>
            <div className="timeline-block foodNew" style={active_style["row1"]["60+10gap"]}>Lunch / Networking</div>
            <div className="timeline-block breakoutNew" style={active_style["row1"]["45+15gap"]}>Breakout Session #2</div>
            <div className="timeline-block breakoutNew" style={active_style["row1"]["45+5gap"]}>Breakout Session #3</div>
            <div className="timeline-block talkNew" style={active_style["row1"]["60"]}>Keynote #2</div>
            <div className="timeline-block foodNew" style={active_style["row1"]["30"]}>{active_style["closing"]}</div>
          </div>
          <div className="timeline-row">
            <div className="timeline-block breakoutNew" style={active_style["row2"]["first_sessions"]}>Breakout Session #1</div>
            <div className="timeline-block breakoutNew" style={active_style["row2"]["second_sessions"]}>Breakout Session #2</div>
            <div className="timeline-block breakoutNew" style={active_style["row2"]["third_sessions"]}>Breakout Session #3</div>
          </div>
        </div>
      </div>
    );
  }
}
