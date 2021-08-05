import React from "react";
import { Wrapper } from './NormalButton.style';

interface Prop {
    text: string
    callback: () => void
}

const NormalButton: React.FC<Prop> = ({ text, callback }) => (
    <Wrapper type='button' onClick={callback} >
        {text}
    </Wrapper>
)

export default NormalButton;