import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Followers from "./components/userComponents/Followers";
import UserCard from "./components/userComponents/UserCard";

class App extends React.Component {
  state = {
    gitUser: {},
    gitFollowers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/FreedomWriter")
      .then(res => res.json())
      .then(res => {
        this.setState({
          gitUser: res
        });
        console.log(
          `nd: index.js: App: componentDidMount: this.state.gitUsers: `,
          this.state.gitUser
        );
      })
      .catch(err =>
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: err: `,
          err
        )
      );
    fetch("https://api.github.com/users/FreedomWriter/followers")
      .then(res => res.json())
      .then(res => {
        this.setState({
          gitFollowers: res
        });
        console.log(
          `nd: index.js: App: componentDidMount: this.state.gitFollowers: `,
          this.state.gitFollowers
        );
      })
      .catch(err =>
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: err: `,
          err
        )
      );
  }

  render() {
    return (
      <div>
        <UserCard gitUser={this.state.gitUser} />
        <Route
          path="/followers"
          render={props => {
            return <Followers {...props} followers={this.state.gitFollowers} />;
          }}
        />
      </div>
    );
  }
}

export default App;
