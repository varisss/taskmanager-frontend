import React from "react";
//icons
import { IoIosAddCircle } from "react-icons/io";
// Styles
import { Wrapper } from "./AddButton.styles";

interface Prop {
  callback: () => void;
}

const AddButton: React.FC<Prop> = ({ callback }) => (
  <Wrapper>
    <IoIosAddCircle
      onClick={callback}
      color="#803300"
      size="100%"
      style={{
        boxShadow:
          "box-shadow: 0px 4px 5px rgba(128, 51, 0, 0.14), 0px 1px 10px rgba(128, 51, 0, 0.12), 0px 2px 4px rgba(128, 51, 0, 0.2)",
      }}
    />
  </Wrapper>
);

export default AddButton;
