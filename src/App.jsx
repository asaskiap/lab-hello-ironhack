import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div id="topPanel">
            <img
              src="./images/ironhack-logo.svg"
              className="App-logo"
              alt="logo"
            />
            <img
              src="./images/menu-top.svg"
              alt="menuBar"
              className="menuBar"
            />
          </div>

          <div
            id="main"
            style={{ backgroundImage: `url(./images/react-logo.svg)` }}
          >
            <h1>Say hello to ReactJs</h1>
            <p id="subtitle">
              You will learn a frontend framework from scratch, to become a
              Ninika Developer
            </p>
            <button>Awesome!</button>
          </div>
        </header>

        <div id="white">
          <p class="section">
            <img src="./images/icon1.png" alt="declarativeIcon" />
            <h3>Declarative</h3>
            <p>React makes it painless to create interactive UIs.</p>
          </p>
          <p class="section">
            <img src="./images/icon2.png" alt="ComponentsIcon" />
            <h3>Components</h3>
            <p>Build encapsulated components that manage their state.</p>
          </p>
          <p class="section">
            <img src="./images/icon3.png" alt="SingleWayIcon" />
            <h3>Single-Way</h3>
            <p>A set of immutable values are passed to the component's.</p>
          </p>
          <p class="section">
            <img src="./images/icon4.png" alt="JSXIcon" />
            <h3>JSX</h3>
            <p>Statically typed, designed to run on modern browsers.</p>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
