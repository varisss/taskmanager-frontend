import React from "react";
import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 84%;
    max-width: 768px;
    margin: 0 auto;
`;

export const Label = styled.label`
    font-size: var(--fontSmall);
    font-weight: 500;
    color: var(--darkishArancia);
`;

export const Input = styled.input`
    height: 44px;
    border-radius: 4px;
    border-width: 1px;
    margin-bottom: 20px;
    outline: none;
    font-style: italic;
`;

export const TextArea = styled.textarea`
    height: 88px;
    border-radius: 4px;
    border-width: 1px;
    margin-bottom: 40px;
    outline: none;
    font: 400 15px Poppins;
    font-style: italic;

`;