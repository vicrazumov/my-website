import React from 'react';
import './App.css';
import ReactSpritz from 'react-spritz';
import '../node_modules/react-spritz/build/main.css';

import getCookie from './getCookie';

const COOKIE_NAME = 'ALREADYSEEN';
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      finished: true,
      started: false,
    }

    this.text = `Hi! I'm Viktor and I’m a Javascript developer based in Moscow.\n
    I have experience in React-Redux, server-side rendering, SASS, socket.IO, express and SQL/NoSQL.\n
    Previously I used to work as a business analyst in oil&gas in Dubai.\n
    I speak 🇬🇧 🇷🇺 and a bit of 🇮🇹\n
    In spare time I play drums, study blockchain and travel.\n
    Btw it took you only 20 seconds to read this 🤓\n
    Let's get in touch!\n`;
  }

  componentDidMount() {
    const cookie = getCookie(COOKIE_NAME);
    const newState = { started: true };
    if (!cookie) newState.finished = false;

    requestAnimationFrame(() => {
      this.setState(newState);
    });
  }

  handleStop = () => {
    this.setState({ finished: true });
    document.cookie = `${COOKIE_NAME}=1;expires=31536000`;
  }

  render() {
    return (
      <div className={this.state.started ? "App" : "App-hidden"}>
        <div className="text-container" style={{ opacity: this.state.finished ? 1 : 0 }}>
          <div className="title">Viktor Razumov</div>
          <div className="subtitle">Full-stack JS developer. Life enthusiast.</div>
          <div>
            <a target="_blank" title="LinkedIn" href="https://www.linkedin.com/in/vrazumov/" className="fa fa-linkedin"></a>
            <a target="_blank" title="GitHub" href="https://github.com/vicrazumov" className="fa fa-github"></a>
            <a target="_blank" title="Facebook" href="https://www.facebook.com/vnrazumov" className="fa fa-facebook"></a>
            <a target="_blank" title="Medium" href="https://medium.com/@vicrazumov" className="fa fa-medium"></a>
            <a title="Replay the intro" href="#" onClick={() => this.setState({ finished: false })} className="fa fa-repeat"></a>
          </div>
        </div>
        <div className="spritz-container" style={{ opacity: this.state.finished ? 0 : 1 }}>
          <ReactSpritz
            text={this.text}
            onStop={this.handleStop}
            wpm={250}
            playing={!this.state.finished}
          />
        </div>
      </div>
    );
  }
}

export default App;
