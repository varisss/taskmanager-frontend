import React from "react";
import { useHistory } from "react-router-dom";
//Icons
import { IconContext } from "react-icons/lib";
import { IoIosArrowRoundBack, IoMdPeople } from "react-icons/io";

import { Wrapper, Content } from "./Headbar.styles";

type Prop = {
    header: string
}

const Headbar: React.FC<Prop> = ({ header }) => {
    const history = useHistory();

    return (
        <IconContext.Provider value={{ color: "black" }}>
            <Wrapper>
                <Content>
                    <IoIosArrowRoundBack size='64px' onClick={() => { history.go(-1) }} />
                    <h2>{header}</h2>
                    <IoMdPeople size='44px' />
                </Content>
            </Wrapper>
        </IconContext.Provider >
    );
}

export default Headbar;