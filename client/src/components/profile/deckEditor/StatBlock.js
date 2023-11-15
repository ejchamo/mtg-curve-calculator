import React from "react";

const StatBlock = (props) => {
  const { cardType, cardStats } = props;

  return (
    <div>
      {cardType} : {cardStats}
    </div>
  );
};

export default StatBlock;
