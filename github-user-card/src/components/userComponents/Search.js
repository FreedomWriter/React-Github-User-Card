import React from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  console.log(props);
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <form>
        <input onChange={props.handleChange} type="text" value={props.search} />
        <button onClick={props.handleSearch}>Search Another User</button>
      </form>
    </>
  );
}
