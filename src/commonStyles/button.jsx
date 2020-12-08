import styled, { css } from "styled-components";

const backgroundColor = "#1e1e1e"; //"#171717";
const borderActiveColor = "rgba(255, 255, 255, 0.7)";
const borderDisableColor = "rgba(255, 255, 255, 0.1)";
const borderDisable = `1px solid ${borderDisableColor}`;

export const Button = styled.button`
  font-size: 1.4rem;
  color: #fff;
  text-transform: lowercase;
  padding: 0.4rem 1.2rem;
  outline: none;
  cursor: pointer;
  border: 0;
  background: ${({ background }) => (background ? background : "transparent")};
  border-radius: ${({ borderRadius }) => borderRadius && "6px"};
  border: ${({ border }) => border && borderDisable};
  border-color: ${({ active }) =>
    active ? borderActiveColor : borderDisableColor};
  border-bottom-color: ${({ active }) =>
    active ? backgroundColor : borderActiveColor};

  ${({ active }) =>
    active &&
    css`
      border-right-color: ${borderActiveColor} !important;
    `};

  span {
    margin-left: 0.8rem;
    opacity: 0.5;
    :hover {
      opacity: 1;
    }
  }
`;
