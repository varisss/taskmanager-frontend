import React from "react";

import backIconImg from '../../images/BackIcon.png';
import threeDotImg from '../../images/ThreeDot.png';

import { Wrapper, Content, BackIcon, ThreeDotIcon } from "./Headbar.styles";

const Headbar: React.FC = () => (
    <Wrapper>
        <Content>
            <BackIcon src={backIconImg} alt="back icon" />
            <h2>dreamteam101</h2>
            <ThreeDotIcon src={threeDotImg} alt="three dot icon" />
        </Content>
    </Wrapper>
);

export default Headbar;