import React from 'react';
// Styles
import { Wrapper, Content, Image } from "./NoContent.styles";

type Prop = {
    heading: string,
    subheading: string,
    image: string
}

const NoContent: React.FC<Prop> = ({ heading, subheading, image }) => (
    <Wrapper>
        <Content>
            <h2>{heading}</h2>
            <h3>{subheading}</h3>
            <Image src={image} alt="budda"></Image>
        </Content>
    </Wrapper>
);

export default NoContent;