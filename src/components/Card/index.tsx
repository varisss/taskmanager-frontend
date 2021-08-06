import React from "react";
// Styles
import { Wrapper, StatusBar, MembersContainer } from "./Card.styles";
// API
import { Member } from "../../API";

type Prop = {
  name: string;
  description: string;
  members: Member[];
  status: string;
};

const Card: React.FC<Prop> = ({ name, description, members, status }) => {
  return (
    <Wrapper>
      <h2>{name}</h2>
      <p>description</p>
      <MembersContainer></MembersContainer>
      <StatusBar>status</StatusBar>
    </Wrapper>
  );
};

export default Card;
