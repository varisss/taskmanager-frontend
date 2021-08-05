import React from "react";

//icons
import { IoIosAddCircle } from "react-icons/io";

// Styles
import { Wrapper } from "./AddButton.styles";

interface Prop {
    callback: () => void
}

const AddButton: React.FC<Prop> = ({ callback }) => (
    <Wrapper>
        <IoIosAddCircle onClick={callback} color='#803300' size='100%' />
    </Wrapper>

)

export default AddButton;