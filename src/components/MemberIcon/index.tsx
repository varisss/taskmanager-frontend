import React from "react";
// Styles
import { Icon } from "./MemberIcon.styles";
type Prop = {
  name: string;
};

const MemberIcon: React.FC<Prop> = ({ name }) => {
  const firstChar: string = name[0].toUpperCase();

  return <Icon>{firstChar}</Icon>;
};
export default MemberIcon;
