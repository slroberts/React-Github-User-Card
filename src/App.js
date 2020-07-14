import React from "react";
import axios from "axios";
import UserCard from "./components/UserCard";
import FollowersCardsList from "./components/FollowersCardsList";
import SearchBar from "./components/SearchBar";
import {Container, Grid} from "@material-ui/core";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      username: "",
      isLoading: false,
    };
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/slroberts`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          user: res,
        });
      })
      .catch((err) => console.log("Oh Hell No!, Did not connect.", err));

    fetch(`https://api.github.com/users/slroberts/followers`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          followers: res,
        });
      })
      .catch((err) => console.log("Oh Hell No!, Did not connect.", err));
  }

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  searchUsers = (e) => {
    e.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.username}`)
      .then((res) => {
        this.setState({
          user: res.data,
        });
      });

    axios
      .get(`https://api.github.com/users/${this.state.username}/followers`)
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      });

    this.setState({
      username: "",
    });
  };

  render() {
    return (
      <Container className="App">
        <SearchBar
          username={this.state.username}
          handleChange={this.handleChange}
          searchUsers={this.searchUsers}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={4}>
            <UserCard user={this.state.user} />
          </Grid>
          <Grid item xs={12} sm={6} md={8}>
            <Grid container spacing={2}>
              <FollowersCardsList followers={this.state.followers} />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default App;
