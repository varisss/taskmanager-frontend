import { type } from "os";
import React from "react";
// Styles
import { Wrapper } from "./NormalButton.style";

interface Prop {
  text: string;
  type?: string;
  callback?: () => void;
}

const defaultProp = {
  text: "",
  type: "submit",
  callback: () => {},
};

const NormalButton: React.FC<Prop> = (prop) => {
  const newProp = { ...defaultProp, ...prop };

  return (
    <Wrapper type="button" onClick={newProp.callback} itemType={newProp.type}>
      <h2>{newProp.text}</h2>
    </Wrapper>
  );
};

export default NormalButton;
