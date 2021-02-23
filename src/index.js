import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

// Start with what components to create
//Start with what makes sense now. Create/Delete later.
//Two Classes needed:
// Card
// List
// Starting from the bottom up.


// const testData = [
//   {name: "Jon Schemmel", avatar_url: "https://avatars.githubusercontent.com/u/8886066?v=4", company:"Instec"},
// 	{name: "Dan Abramov", avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4", company: "@facebook"},
//   {name: "Sophie Alpert", avatar_url: "https://avatars2.githubusercontent.com/u/6820?v=4", company: "Humu"},
// 	{name: "Sebastian Markbåge", avatar_url: "https://avatars2.githubusercontent.com/u/63648?v=4", company: "Facebook"},
// ];


// * Make below block a class component *
// const App = ({title}) => (
//   <div className="header">{title}</div>
// );

const CardList = (props) => {
  return(
    <div>
      {props.profiles.map(profile => <Card key={profile.id} {...profile} />)}
    </div>
  );
}

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url } alt="yes"/>
        <div className="info">
          <div className="name">{profile.name}</div>
          <div className="company">{profile.company}</div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component{
  state = {userName: ''};
  handleSubmit = async(event) => {
    //debugger();
    event.preventDefault();
    const response = await axios.get(`https://api.github.com/users/${this.state.userName }`);
    this.props.onSubmit (response.data);
    this.setState({userName:''} )
  };
  render() {
    return (
       <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.userName  }
          onChange={event => this.setState({userName : event.target.value})}
          placeholder="Github User Name"

        />
        <button>Add new card</button>
       </form>
    );
  }
}

class App extends React.Component {
  // constructor
  // this keyword
  // Every react.component needs a render()
  // instead of receiving props as arguments, both the props and state are managed by instance of class.
  // Each instance has it's own instance state.
  constructor(props) {
    super(props);
    this.state = {
      profiles: []
    };
  }
  //below can replace the above code at some point.
  //state = {profiles:testData};
  addNewProfile = (profileData) => {
    //console.log(App, profileData)
    this.setState(prevState => ({
      profiles: [...prevState.profiles,profileData ],
    }))
  };

  render() {
    return (
      <div>
        <div className="header">{this.props.title}</div>
        <Form onSubmit={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    )
  }
}


ReactDOM.render(
  <App title="The GitHub Cards App" />,
  document.getElementById("root")
);
