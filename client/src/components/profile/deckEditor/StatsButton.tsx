import React from "react";

interface props {
  showStats: boolean;
  setShowStats: (status: boolean) => void;
}

const StatsButton: React.FC<props> = ({ showStats, setShowStats }) => {
  const changeStats = () => {
    setShowStats(!showStats);
  };

  let option: string;
  if (showStats) {
    option = "Hide Stats";
  } else {
    option = "Run Stats";
  }

  return (
    <button className="stats-button" onClick={changeStats}>
      {option}
    </button>
  );
};

export default StatsButton;
