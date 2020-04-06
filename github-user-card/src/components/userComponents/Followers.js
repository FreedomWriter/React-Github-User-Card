import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-router";

export default function Followers(props) {
  const handleClick = async (e, follower) => {
    e.preventDefault();
    try {
      await props.handleCheckThemOut(follower);
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>{props.gitUser.login}'s Followers</h1>
      <div className="follower-layout">
        {props.followers &&
          props.followers.map((follower) => {
            // console.log(`nd: Followers: follower: `, follower);
            return (
              <div key={follower.id} className="followercard">
                <img
                  className="profile-pic"
                  src={follower.avatar_url}
                  alt={follower.login}
                />
                <p>Screen Name: {follower.login}</p>
                <button
                  className="button"
                  onClick={(e) => handleClick(e, follower)}
                >
                  Check them out!
                </button>
              </div>
            );
          })}
      </div>
    </>
  );
}
