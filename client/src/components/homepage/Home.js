import React from "react";
import WelcomeBox from "./WelcomeBox";
import ProfileBox from "./ProfileBox";
import DeckEditorBox from "./DeckEditorBox";

const Home = () => {
  return (
    <div className="home-container">
      <WelcomeBox />
      <ProfileBox />
      <DeckEditorBox />
    </div>
  );
};

export default Home;
