import React from 'react';

import axios from 'axios';

import TopBar from './components/TopBar.js';
import UserCard from './components/UserCard.js';
import FollowersBar from './components/FollowersBar.js';
import FollowersList from './components/FollowersList.js';
import SearchForm from './components/SearchForm.js';

import styled from 'styled-components';
import { Divider, Box } from '@material-ui/core';

const FollowersSection = styled.section`
  margin-top: 50px;
`;

class App extends React.Component {
  // since we dont need to use props we dont need a constructor or super and can set initial state this way
  state = {
    userName: 'MicahJank', // the intial name to be used for the api call, can be change whenever a user clicks one of the follower cards
    user: [],
    followers: []
  }

  // Here is where we are grabbing the data, after using axios to get the data from the api i set the state to the user data inside
  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.setState({user: res.data})
        console.log('App.js: componentDidMount: ',this.state.user)
        return res.data.followers_url; // return the followers url because when we chain another .then we will need to do another axios call with the followers url
      })
      .then(followersURL => {
        axios.get(followersURL)
          .then(res => this.setState({followers: res.data})) // the data from the followers url is then set as state
      })
      .catch(err => alert(err));
  }

  // essentially the same thing is happening here as the componentDidMount, main difference is that this is checking to make sure that the userName state has changed and will
  // only run the axios call when that is true
  componentDidUpdate(prevProps, prevState) {
    if (prevState.userName !== this.state.userName) {
      axios.get(`https://api.github.com/users/${this.state.userName}`)
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
    console.log('App.js: componentDidUpdate: ', this.state.userName)
  };

  // the handle click should be passed down to the FollowerCard so that whenever the user clicks on a card the main card that is displayed changes to that user instead
  handleClick = (follower) => {
    // event.preventDefault();
    this.setState({
      userName: follower.login
    })
    console.log('App.js: handleClick', this.state.userName);
  }

  render() {
    return (
      <Box>
        <TopBar />
        <SearchForm />
        <UserCard user={this.state.user} />
        <FollowersSection>
          <Divider />
          <FollowersBar />
          <FollowersList followers={this.state.followers} handleClick={this.handleClick} />
        </FollowersSection>
      </Box>
    );
  }
}

export default App;
