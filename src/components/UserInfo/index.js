import React from "react";
import "./styles.css";
const UserInfo = () => {
  return (
    <div className="UserProfileWrapper">
      <img className="ProfilePic" src="https://i.imgur.com/tdi3NGa.png" />

      <div className="UserProfileTextWrapper">
        <h2>User name</h2>
        <h4>@username</h4>
        <p>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab
        </p>
      </div>
    </div>
  );
};

export { UserInfo };
