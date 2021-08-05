import styled from "styled-components";

export const Wrapper = styled.header`
    padding: 0 20px;
    background-color: transparent;
    top: 0;
    left: 0;
    right: 0;

`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 15px 0px;
    
    h2 {
        margin: 10px 20px 0px 20px;
        font-size: var(--fontBig);
        overflow: auto;
    };
`;
