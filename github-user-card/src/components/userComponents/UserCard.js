import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function UserCard(props) {
  // console.log(`nd: UserCard: props: `, props);

  return (
    <div className="usercard" key={props.gitUser.id}>
      <img
        className="profile-pic"
        src={props.gitUser.avatar_url}
        alt={props.gitUser.name}
      />
      <p>{props.gitUser.login}</p>
      <p>{props.gitUser.name}</p>
      <p>{props.gitUser.bio}</p>
      <p>{props.gitUser.location}</p>
      <p>{props.gitUser.public_repos} Repos</p>
      <a href={props.gitUser.repos_url}>View My Repos</a>
      <p></p>
      <Link className="button" to="/followers">
        <button>Who follows {props.gitUser.login}?</button>
      </Link>
      <img
        className="user-card"
        src={`http://ghchart.rshah.org/${props.gitUser.login}`}
        alt="2016rshah's Github chart"
      />
    </div>
  );
}
