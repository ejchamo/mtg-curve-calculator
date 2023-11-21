import React from "react";
import profileImage from "../../assets/images/ProfilePageExample.png";

const ProfileBox = () => {
  return (
    <div className="profile-box">
      <img className="profile-image" src={profileImage} alt="profile page example" />
      <div class="col-12 col-lg-6 right profile-explanation">
        <h2>Profile Page</h2>
        <p>
          Login in and import decks straight from Magic the Gathering Arena or export decks back to
          MTGA after running your analysis
        </p>
      </div>
    </div>
  );
};

export default ProfileBox;
