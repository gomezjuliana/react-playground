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
    this.setState({
      interest: this.state.value
    });
    return <showNextSection interest={this.state.interest}/>;
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
    );
  }
};

function showNextSection(props) {
  console.log(this.props.interest);
  if (this.props.interest === 'me'){
    return <aboutMeSection />;
  };
  // if (interest === "marketing"){
  //   return <p>You wanna know about marketing</p>;
  // };
  // if (interest === "development"){
  //   return <p>You wanna know about code</p>;
  // };
}

function aboutMeSection(props){
  return <p>You wanna know about me!</p>;
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
        <showNextSection />
      </section>
      </section>
    );
  }
}

export default App;
