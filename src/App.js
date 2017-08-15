import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Navigation(props){
  return (
    <nav>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function HeroImage(props){
  return (
    <div className="heroImage">
    </div>
  );
}

function Section(props){
  return(
    <section className={`${props.title}-section`}>
    <h1>{props.title}</h1>
    </section>
  );
}

class App extends Component {
  render() {
    return (
      <header>
        <Navigation />
        <HeroImage />
  
      <Section title="Home" />
      <Section title="About" />
      <Section title="Contact" />
      </header>
    );
  }
}

export default App;
