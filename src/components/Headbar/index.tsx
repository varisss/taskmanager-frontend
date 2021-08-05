import React from "react";

//Icons
import { IconContext } from "react-icons/lib";
import { IoIosArrowRoundBack, IoMdPeople } from "react-icons/io";

import { Wrapper, Content } from "./Headbar.styles";

type Prop = {
    header: string
}

const Headbar: React.FC<Prop> = ({ header }) => (
    <IconContext.Provider value={{ color: "black", size: '40px' }}>
        <Wrapper>
            <Content>
                <IoIosArrowRoundBack />
                <h2>{header}</h2>
                <IoMdPeople />
            </Content>
        </Wrapper>
    </IconContext.Provider >
);

export default Headbar;