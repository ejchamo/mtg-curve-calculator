import React from "react";
import StatBlock from "./StatBlock.tsx";
import { StatType } from "../../../../typings/custom/stat";

interface props {
  stat: StatType;
  turn: number;
}

const StatsTile: React.FC<props> = ({ stat, turn }) => {
  const stats = Object.keys(stat);
  const sortedStats = stats.sort();

  const lands: string = sortedStats.pop()!;

  const statBlocks: React.ReactNode[] = [];

  statBlocks.push(<StatBlock key={lands} cardProperty={lands} cardStats={stat[lands]} />);

  sortedStats.forEach((key) => {
    statBlocks.push(<StatBlock key={key} cardProperty={key} cardStats={stat[key]} />);
  });

  return (
    <div className="stat-tile">
      <h5 className="turn">TURN {turn}</h5>
      {statBlocks}
    </div>
  );
};

export default StatsTile;
