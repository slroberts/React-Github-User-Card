import React from "react";

const UserCard = (props) => {
  return (
    <>
      <img src={props.user.avatar_url} alt="profile" />
      {props.user.name}
      {props.user.login}
      {props.user.location}
      <a href={props.user.html_url} target="_blank" rel="noopener noreferrer">
        {props.user.html_url}
      </a>
      {props.user.followers}
      {props.user.following}
      {props.user.bio}
    </>
  );
};

export default UserCard;
