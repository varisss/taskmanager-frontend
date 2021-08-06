import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    width: 100%;
    max-width: var(--maxWidth);
    padding: 25px;
    margin-bottom: 30px;
    background-color: var(--white);
    border-radius: 20px;
    flex-grow: 1;
    box-shadow: 0px 4px 8px -2px rgba(255, 209, 179, 0.4);
`;

export const MembersContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
`;

export const StatusBar = styled.div`
    background-color: grey;
    border-radius: 8px;
    color: var(--darkArancia);
    font-size: 14px;
`;