import React from 'react';

import axios from 'axios';

import TopBar from './components/TopBar.js';
import UserCard from './components/UserCard.js';

class App extends React.Component {
  // since we dont need to use props we dont need a constructor or super and can set initial state this way
  state = {
    user: [],
    followers: []
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/MicahJank`)
      .then(res => {
        this.setState({user: res.data})
        return res.data.followers_url;
      })
      .then(followersURL => {
        axios.get(followersURL)
          .then(res => this.setState({followers: res.data}))
      })
      .catch(err => alert(err));
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <TopBar />
        <UserCard user={this.state.user} />
      </div>
    );
  }
}

export default App;
