import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Followers from "./components/userComponents/Followers";
import UserCard from "./components/userComponents/UserCard";
import Search from "./components/userComponents/Search";

class App extends React.Component {
  state = {
    gitUser: { login: "FreedomWriter" },
    gitFollowers: [],
    search: [], //test to see if loop prevented
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.gitUser.login}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          gitUser: res,
          search: "",
        });
      })
      .catch((err) =>
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: err: `,
          err
        )
      );
    fetch(`https://api.github.com/users/${this.state.gitUser.login}/followers`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          gitFollowers: res,
          search: [],
        });
      })
      .catch((err) =>
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: err: `,
          err
        )
      );
  }

  handleCheckThemOut = (follower) => {
    fetch(`https://api.github.com/users/${follower.login}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          gitUser: res,
          search: [],
        });
      })
      .catch((err) =>
        console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
      );
    fetch(`https://api.github.com/users/${follower.login}/followers`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          gitFollowers: res,
          search: [],
        });
      })
      .catch((err) =>
        console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
      );
  };

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      search: e.target.value,
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${this.state.search}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          gitUser: res,
          search: [],
        });
      })
      .catch((err) =>
        console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
      );
    fetch(`https://api.github.com/users/${this.state.search}/followers`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          gitFollowers: res,
          search: [],
        });
      })
      .catch((err) =>
        console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
      );
  };

  render() {
    console.log(this.state.gitUser.login);
    return (
      <div>
        <Search
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          search={this.state.search}
        />
        <Route
          exact
          path="/"
          render={(props) => {
            return (
              <UserCard
                {...props}
                gitUser={this.state.gitUser}
                followers={this.state.gitFollowers}
              />
            );
          }}
        />
        <Route
          path="/followers"
          render={(props) => {
            return (
              <Followers
                {...props}
                handleCheckThemOut={this.handleCheckThemOut}
                gitUser={this.state.gitUser}
                followers={this.state.gitFollowers}
              />
            );
          }}
        />
      </div>
    );
  }
}

export default App;
