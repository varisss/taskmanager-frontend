import React from "react";

import { Wrapper } from "./StatusBar.styles";

type Prop = {
  status?: string | undefined;
  className?: string | undefined;
};

const StatusBar: React.FC<Prop> = ({ status, className }) => {
  let color = "red";

  if (status === "pending") {
    color = "var(--medGrey)";
  } else if (status === "ongoing") {
    color = "var(--yellowArancia)";
  } else if (status === "complete") {
    color = "#71EFA3"; // green
  }

  if (className) {
    return (
      <Wrapper bgColor={color} className="status-bar">
        {status}
      </Wrapper>
    );
  }
  return <Wrapper bgColor={color}>{status}</Wrapper>;
};

export default StatusBar;
