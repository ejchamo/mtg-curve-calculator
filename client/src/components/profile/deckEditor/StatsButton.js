import React from "react";

const StatsButton = (props) => {
  const { showStats, setShowStats } = props;

  const changeStats = () => {
    setShowStats(!showStats);
  };

  let option;
  if (showStats) {
    option = "Hide Stats";
  } else {
    option = "Run Stats";
  }

  return <button onClick={changeStats}>{option}</button>;
};

export default StatsButton;
