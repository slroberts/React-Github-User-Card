import React from "react";

const FollowersCardsList = (props) => {
  return (
    <>
      {props.followers.map((follower) => (
        <div key={follower.id}>
          <img src={follower.avatar_url} alt="profile" />
          {follower.login}
          <a href={follower.html_url} target="_blank" rel="noopener noreferrer">
            {follower.html_url}
          </a>
        </div>
      ))}
    </>
  );
};

export default FollowersCardsList;
