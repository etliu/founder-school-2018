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
    "60": {
      width: "12.5%",
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
      marginLeft: "31.25%",
      width: "9.375%",
    },
    "second_sessions": {
      marginLeft: "18.75%",
      width: "9.375%",
    },
    "third_sessions": {
      marginLeft: "6.25%",
      width: "9.375%",
    },
  },
  "closing": <i className="fa fa-gift" title="Closing Statements"></i>,
}

let mobile_styles = {
  "row1": {
    "15": {
      height: "26px",
    },
    "30": {
      height: "26px",
    },
    "45": {
      height: "41px",
    },
    "60": {
      height: "52px",
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
      marginTop: "130px",
      height: "41px",
    },
    "second_sessions": {
      marginTop: "78px",
      height: "41px",
    },
  },
  "closing": "Closing",
}

export default class ScheduleDayOld extends React.Component {
  render() {
    let active_style = web_styles;
    if (window.innerWidth < 790) {
      active_style = mobile_styles;
    }

    return (
      <div className="schedule-day">
        <div className="timeline-table">
          <div className="timeline-row">
            <div className="timeline-block food" style={active_style["row1"]["60"]}>Check-In</div>
            <div className="timeline-block talk" style={active_style["row1"]["75+15gap"]}>Keynote</div>
            <div className="timeline-block breakout" style={active_style["row1"]["45"]}>Breakout Session #1</div>
            <div className="timeline-block food" style={active_style["row1"]["75+15gap"]}>Lunch</div>
            <div className="timeline-block breakout" style={active_style["row1"]["45"]}>Breakout Session #2</div>
            <div className="timeline-block food" style={active_style["row1"]["30"]}>Break</div>
            <div className="timeline-block talk" style={active_style["row1"]["75"]}>Closing Keynote</div>
            <div className="timeline-block food" style={active_style["row1"]["15"]}>{active_style["closing"]}</div>
          </div>
          <div className="timeline-row">
            <div className="timeline-block breakout" style={active_style["row2"]["first_sessions"]}>Breakout Session #1</div>
            <div className="timeline-block breakout" style={active_style["row2"]["second_sessions"]}>Breakout Session #2</div>
            <div className="timeline-block breakout" style={active_style["row2"]["third_sessions"]}>Breakout Session #3</div>
          </div>
          <div className="timeline-row">
            <div className="timeline-block breakout" style={active_style["row2"]["first_sessions"]}>Breakout Session #1</div>
            <div className="timeline-block breakout" style={active_style["row2"]["second_sessions"]}>Breakout Session #2</div>
            <div className="timeline-block breakout" style={active_style["row2"]["third_sessions"]}>Breakout Session #3</div>
          </div>
        </div>
      </div>
    );
  }
}