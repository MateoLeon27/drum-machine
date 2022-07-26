import DrumMachine from "./components/DrumMachine";
import "./App.css";
import React from "react";

const data = [
  {
    id: "heater1",
    letter: "Q",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    id: "snare",
    letter: "W",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    id: "snare",
    letter: "E",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    id: "snare",
    letter: "A",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    id: "snare",
    letter: "S",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    id: "snare",
    letter: "D",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    id: "snare",
    letter: "Z",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    id: "snare",
    letter: "X",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    id: "snare",
    letter: "C",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "Click or Press a Key",
    };
  }

  handleDisplay = (display) => this.setState({ display });

  render() {
    return (
      <div id="drum-machine">
        <div id="display">{this.state.display}</div>
        {data.map((d) => (
          <DrumMachine
            id={d.id}
            key={d.id}
            letter={d.letter}
            src={d.src}
            handleDisplay={this.handleDisplay}
          />
        ))}
      </div>
    );
  }
}

export default App;
