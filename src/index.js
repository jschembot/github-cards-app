import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Start with what components to create
//Start with what makes sense now. Create/Delete later.
//Two Classes needed:
// Card
// List
// Starting from the bottom up.


const testData = [
	{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
  {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
	{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
];


// * Make below block a class component *
// const App = ({title}) => (
//   <div className="header">{title}</div>
// );

const CardList = (props) => {
  return(
    <div>
      <Card />
    </div>
  );
}

class Card extends React.Component {
  render() {
    const profile = testData[0];
    return (
      <div className="github-profile">
        <img src={profile.avatar_url } />
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
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
        <CardList />
      </div>
    )
  }
}


ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);
