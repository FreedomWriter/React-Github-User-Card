import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Followers from "./components/userComponents/Followers";
import UserCard from "./components/userComponents/UserCard";
import Search from "./components/userComponents/Search";

class App extends React.Component {
  state = {
    gitUser: {},
    gitFollowers: [],
    search: [] //test to see if loop prevented
  };

  componentDidMount() {
    fetch(`https://api.github.com/users/FreedomWriter`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          gitUser: res,
          search: ""
        });
        // console.log(
        //   `nd: index.js: App: componentDidMount: this.state.gitUsers: `,
        //   this.state.gitUser
        // );
      })
      .catch(err =>
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: err: `,
          err
        )
      );
    fetch(`https://api.github.com/users/FreedomWriter/followers`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          gitFollowers: res,
          search: []
        });
        // console.log(
        //   `nd: index.js: App: componentDidMount: this.state.gitFollowers: `,
        //   this.state.gitFollowers
        // );
      })
      .catch(err =>
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: err: `,
          err
        )
      );
  }

  handleChange = e => {
    e.preventDefault();
    this.setState({
      search: e.target.value
    });
  };

  //switched to prevProps from prevState to test
  componentDidUpdate(prevProps, prevState) {
    // console.log(JSON.parse(prevProps) + "  " + prevState);
    // if (this.state.search) {
    if (prevState.search !== this.state.search) {
      fetch(`https://api.github.com/users/${this.state.search}`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            gitUser: res,
            search: []
          });
          console.log(
            `nd: index.js: App: Search: this.state.gitUsers: `,
            this.state.gitUser
          );
        })
        .catch(err =>
          console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
        );
      fetch(`https://api.github.com/users/${this.state.search}/followers`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            gitFollowers: res,
            search: []
          });
          console.log(
            `nd: index.js: App: Search: this.state.gitFollowers: `,
            this.state.gitFollowers
          );
        })
        .catch(err =>
          console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
        );
    }
    // }
  }

  // handleSearch = e => {
    e.preventDefault();
    // fetch(`https://api.github.com/users/${this.state.search}`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       gitUser: res,
    //       search: []
    //     });
    //     console.log(
    //       `nd: index.js: App: Search: this.state.gitUsers: `,
    //       this.state.gitUser
    //     );
    //   })
    //   .catch(err =>
    //     console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
    //   );
    // fetch(`https://api.github.com/users/${this.state.search}/followers`)
    //   .then(res => res.json())
    //   .then(res => {
    //     this.setState({
    //       gitFollowers: res,
    //       search: []
    //     });
    //     console.log(
    //       `nd: index.js: App: Search: this.state.gitFollowers: `,
    //       this.state.gitFollowers
    //     );
    //   })
    //   .catch(err =>
    //     console.log(`nd: index.js: App: Search: fetch: then: err: `, err)
    //   );
  };

  render() {
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
          render={props => {
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
          render={props => {
            return (
              <Followers
                {...props}
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
