import React from "react";
import UserCard from "./components/UserCard";
import FollowersCardsList from "./components/FollowersCardsList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/slroberts")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          user: res,
        });
      })
      .catch((err) => console.log("Oh Hell No!, Did not connect.", err));

    fetch("https://api.github.com/users/slroberts/followers")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({
          followers: res,
        });
      })
      .catch((err) => console.log("Oh Hell No!, Did not connect.", err));
  }
  render() {
    return (
      <div className="App">
        <UserCard user={this.state.user} />
        <FollowersCardsList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
