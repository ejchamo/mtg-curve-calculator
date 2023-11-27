import React, { useState, useEffect } from "react";
import getStats from "../../../services/getStats.ts";
import StatsTile from "./StatsTile.tsx";
import { CardType } from "../../../../typings/custom/card";
import { Stats } from "../../../../typings/custom/stat";

interface props {
  cards: CardType[];
}

const StatsList: React.FC<props> = ({ cards }) => {
  const [stats, setStats] = React.useState<Stats>();

  useEffect(() => {
    getStats(cards).then((response) => {
      setStats(response.stats);
    });
  }, []);

  const statsTiles: React.ReactNode[] = [];

  for (const key in stats) {
    statsTiles.push(<StatsTile key={key} turn={key} stat={stats[key]} />);
  }

  return <div className="stats-list">{statsTiles}</div>;
};

export default StatsList;
