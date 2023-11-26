import React from "react";

interface props {
  cardProperty: string;
  cardStats: string;
}

const StatBlock: React.FC<props> = ({ cardProperty, cardStats }) => {
  return (
    <div className="stat-block">
      {cardProperty} : {cardStats}%
    </div>
  );
};

export default StatBlock;
