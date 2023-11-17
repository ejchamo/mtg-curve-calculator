import React from "react";
import StatBlock from "./StatBlock";
import { object } from "prop-types";

const StatsTile = (props) => {
  const { stat } = props;

  const stats = Object.keys(stat);
  const sortedStats = stats.sort();

  const lands = sortedStats.pop();

  const statBlocks = [];

  statBlocks.push(<StatBlock key={lands} cardType={lands} cardStats={stat[lands]} />);

  sortedStats.forEach((key) => {
    statBlocks.push(<StatBlock key={key} cardType={key} cardStats={stat[key]} />);
  });

  return (
    <div className="stat-tile">
      <h5 className="turn">TURN {props.turn}</h5>
      {statBlocks}
    </div>
  );
};

export default StatsTile;
