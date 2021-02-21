import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Start with what components to create
//Start with what makes sense now. Create/Delete later.
//Two Classes needed:
// Card
// List
// Starting from the bottom up.

// * Make below block a class component *
// const App = ({title}) => (
//   <div className="header">{title}</div>
// );

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name Here..</div>
          <div className="company">Company Here...</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  // constructor
  // this keyword
  // Every react.component needs a render()
  // instead of receiving props as arguments, both the props and state are managed by instance of class.
  // Each instance has it's own instance state.
  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Card />
      </div>
    )
  }
}


ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);
