import React from "react";
import { useHistory } from "react-router-dom";
// Icons
import { IoIosClose } from "react-icons/io";
// Styles
import { Wrapper, Content } from "./FormHeadBar";

type Prop = {
  header: string;
};

const FormHeadbar: React.FC<Prop> = ({ header }) => {
  const history = useHistory();

  return (
    <Wrapper>
      <Content>
        <IoIosClose
          color="var(--darkishArancia)"
          size="48px"
          onClick={() => {
            history.go(-1);
          }}
        />
        <h2>{header}</h2>
      </Content>
    </Wrapper>
  );
};

export default FormHeadbar;
