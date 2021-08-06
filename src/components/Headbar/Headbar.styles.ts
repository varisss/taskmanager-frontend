import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100%;
    max-width: var(--maxWidth);
    padding: 0 20px;
    background-color: transparent;
    margin: 0 auto;

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
        overflow: auto;
    };
`;
