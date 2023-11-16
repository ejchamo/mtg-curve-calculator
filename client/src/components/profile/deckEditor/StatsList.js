import React, { useState, useEffect } from "react";
import getStats from "../../../services/getStats";
import StatsTile from "./StatsTile";

const StatsList = (props) => {
  const [stats, setStats] = useState({});

  useEffect(() => {
    getStats(props.cards).then((response) => {
      setStats(response.stats);
    });
  }, []);

  const statsTiles = [];

  for (const key in stats) {
    statsTiles.push(<StatsTile key={key} turn={key} stat={stats[key]} />);
  }

  return <div className="stats-list">{statsTiles}</div>;
};

export default StatsList;
