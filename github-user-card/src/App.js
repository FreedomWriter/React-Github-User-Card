import React from "react";
import "./App.css";
import UserCard from "./components/userComponents/UserCard";

class App extends React.Component {
  state = {
    gitUser: [],
    gitFollowers: []
  };

  componentDidMount() {
    fetch("https://api.github.com/users/FreedomWriter")
      .then(res => res.json())
      .then(res => {
        console.log(
          `nd: index.js: App: componentDidMount: fetch: then: res: `,
          res
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
        <UserCard />
      </div>
    );
  }
}

export default App;
