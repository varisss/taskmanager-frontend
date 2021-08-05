import React from "react";

import backIconImg from '../../images/BackIcon.png';
import threeDotImg from '../../images/ThreeDot.png';

import { Wrapper, Content, BackIcon, ThreeDotIcon } from "./Headbar.styles";

type Prop = {
    header: string
}
const Headbar: React.FC<Prop> = ({ header }) => (
    <Wrapper>
        <Content>
            <BackIcon src={backIconImg} alt="back icon" />
            <h2>header</h2>
            <ThreeDotIcon src={threeDotImg} alt="three dot icon" />
        </Content>
    </Wrapper>
);

export default Headbar;