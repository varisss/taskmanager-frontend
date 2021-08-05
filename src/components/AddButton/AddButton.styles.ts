import styled from "styled-components";

export const Wrapper = styled.button`
    position: fixed;
    background-color: #803300;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 0;
    bottom: 20px;
    right: 20px;
    outline: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        width: 75px;
        height: 75px;
    }

`;