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
            <option value="cats">Cats</option>
            <option value="dogs">Dogs</option>
            <option value="birds">Birds</option>
          </select>
        </label>
      </form>
    );
  }
};

function Blurb(props){
  if (props.sectionName === "cats") {
    return <p>Cats!</p>
  } 
  if (props.sectionName === "dogs") {
    return <p>Dogs!</p>
  }
  else return <p>Birds!</p>
}

class ContentSection extends React.Component{
  constructor(props){
    super(props);
    this.state={value:"cats"};

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
