import React, { Component } from 'react';
import image from './components/icon1.png';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="images/ironhack-logo.svg" className="ironhack-logo" alt="ironhack-logo" />

          <p className="main-title">Say hello to ReactJS</p>
          <p className="caption">
            You will learn a Frontend framework from scratch, to become an Ninka Developer.
          </p>
          <button className="awesome">Awesome!</button>
        </header>
        <div className="container">
          <div className="box-1">
            <img src={image} alt="" />
            <p className="title">Declarative</p>
            <p className="description">React makes it painless to create interactive UIs.</p>
          </div>
          <div className="box-2">
            <img src="images/icon2.png" alt="" />
            <p className="title">Components</p>
            <p className="description">Build encapsulated components that manage their state.</p>
          </div>
          <div className="box-3">
            <img src="images/icon3.png" alt="" />
            <p className="title">Single-way</p>
            <p className="description">A set of immutable values are passed to the component's.</p>
          </div>
          <div className="box-4">
            <img src="images/icon4.png" alt="" />
            <p className="title">JSX</p>
            <p className="description">Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
