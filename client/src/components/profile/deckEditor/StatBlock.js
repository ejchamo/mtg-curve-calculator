import React from "react";

const StatBlock = (props) => {
  const { cardType, cardStats } = props;

  return (
    <div className="stat-block">
      {cardType} : {cardStats}%
    </div>
  );
};

export default StatBlock;
