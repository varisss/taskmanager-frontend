import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  background-color: var(--lightArancia);
  width: 40%;
  max-width: 800px;
  max-height: 500px;
  border-radius: 20px;
  left: -100%;
  bottom: -100%;
  transition: 1050ms;
  z-index: 20;

  &.active {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: 600ms;
  }
`;

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 84%;
  max-width: 768px;
  margin: 20px auto;
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
