import React from "react";
import WelcomeBox from "./WelcomeBox.tsx";
import ProfileBox from "./ProfileBox.tsx";
import DeckEditorBox from "./DeckEditorBox.tsx";

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
