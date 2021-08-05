import React from "react";
import { Wrapper } from "./AddButton.styles";

interface Prop {
    callback: () => void
}

const AddButton: React.FC<Prop> = ({ callback }) => (
    <Wrapper type='button' onClick={callback} >
    </Wrapper>
)

export default AddButton;