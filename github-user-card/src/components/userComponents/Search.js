import React from "react";
import { Link } from "react-router-dom";

export default function Search(props) {
  console.log(props);
  return (
    <div className="search-bar-layout ">
      <Link className="button" to="/">
        <button>Home</button>
      </Link>
      <form className="button">
        <input onChange={props.handleChange} type="text" value={props.search} />
        <button onClick={props.handleSearch}>Search Another User</button>
      </form>
      {/* <Link to="/">
        <button>Back To FreedomWriter</button>
      </Link> */}
    </div>
  );
}
