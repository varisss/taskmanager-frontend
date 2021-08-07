import styled from "styled-components";

type Prop = {
    bgColor: string
}

export const Wrapper = styled.span<Prop>`
  border-radius: 8px;
  background-color: ${props => props.bgColor || "red"};
  color: var(--darkArancia);
  padding: 0px 8px;
`;