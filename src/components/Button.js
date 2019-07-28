import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 0.9rem;
  background: transparent;
  border: 0.05rem solid var(--lightRed);
  border-color: ${props =>
    props.cart ? "var(--mainDark)" : " var(--mainRed)"};
  color: ${prop => (prop.cart ? "var(--mainDark)" : " var(--mainRed)")};
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: ${prop => (prop.cart ? "var(--mainDark)" : " var(--lightRed)")};
    color: var(--mainWhite);
  }
  &:focus {
    outline: none;
  }
`;
