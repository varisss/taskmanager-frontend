import styled from "styled-components";

export const Wrapper = styled.button`
    box-sizing: border-box;
    position: fixed;
    background-color: transparent;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: 0;
    bottom: 20px;
    right: 20px;
    outline: none;
    cursor: pointer;
    

    @media screen and (max-width: 768px) {
        width: 110px;
        height: 110px;
    }
`;