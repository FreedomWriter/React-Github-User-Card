import React from "react";
import { Link } from "react-router-dom";

export default function Followers(props) {
  console.log(`nd: UserCard: props: `, props);
  return (
    <div className="follower-layout">
      {props.followers &&
        props.followers.map(follower => {
          console.log(`nd: Followers: follower: `, follower);
          return (
            <div key={follower.id} className="usercard">
              <img src={follower.avatar_url} alt={follower.login} />
              <Link to={follower.html_url}>Check them out!</Link>
              <p>Screen Name: {follower.login}</p>
              {/* <p>{follower.}</p> */}
            </div>
          );
        })}
    </div>
  );
}
