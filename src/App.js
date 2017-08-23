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

class ExperienceForm extends React.Component {
  render(){
    return (
      <form>
        <label>
          Find out more about:
          <select value={this.props.sectionName} onChange={this.props.onSectionChange}>
            <option value="me">Me</option>
            <option value="marketing">My past in marketing</option>
            <option value="development">My switch to frontend development</option>
          </select>
        </label>
      </form>
    );
  }
};

function Blurb(props){
  return <p>{props.sectionName}</p>
}

class ContentSection extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"me"};

    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <section>
      <ExperienceForm onSectionChange={this.handleChange} sectionName={this.state.value}/>
      <Blurb sectionName={this.state.value}/>
    </section>
  )}
}

class App extends Component {
  render() {
    return (
      <section>
        <header>
          <Navigation />
          <HeroImage />
        </header>
        <ContentSection />
      </section>
    );
  }
}

export default App;
