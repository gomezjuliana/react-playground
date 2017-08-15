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

class ExperienceForm extends React.Component {
  constructor(props){
    super(props);
    this.state={value:"me"};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    alert('You want to learn more about ' + this.state.value);
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Find out more about:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="me">Me</option>
            <option value="marketing">My past in marketing</option>
            <option value="development">My switch to frontend development</option>
          </select>
        </label>
        <input type="submit" value="submit" />
      </form>
    )
  }
}




class App extends Component {
  render() {
    return (
      <section>
        <header>
          <Navigation />
          <HeroImage />
        </header>
      <section>
        <ExperienceForm />
      </section>
      </section>
    );
  }
}

export default App;
