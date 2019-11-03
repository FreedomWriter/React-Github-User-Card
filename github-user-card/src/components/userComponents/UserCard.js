import React from "react";
import Followers from "./Followers";

export default function UserCard(props) {
  console.log(`nd: UserCard: props: `, props.gitUser);
  return (
    <div key={props.gitUser.id}>
      <img src={props.gitUser.avatar_url} alt={props.gitUser.name} />
      <p>{props.gitUser.login}</p>
      <p>{props.gitUser.name}</p>
      <p>{props.gitUser.bio}</p>
      <p>{props.gitUser.location}</p>
      <p>{props.gitUser.public_repos} Repos</p>
      <p>{props.gitUser.repos_url}</p>
      <p></p>
      <Followers followers={props.followers}>
        {" "}
        {props.gitUser.followers} Followers
      </Followers>
    </div>
  );
}
