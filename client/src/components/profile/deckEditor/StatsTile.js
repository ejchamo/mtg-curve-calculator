import React from "react";
import StatBlock from "./StatBlock";

const StatsTile = (props) => {
  const { stat } = props;

  const statBlocks = [];

  for (const key in stat) {
    statBlocks.push(<StatBlock key={key} cardType={key} cardStats={stat[key]} />);
  }

  return (
    <div>
      turn {props.turn}
      {statBlocks}
    </div>
  );
};

export default StatsTile;
