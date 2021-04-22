import styled, { css } from "styled-components";

interface ButtonProps {
    primary?: boolean;
    disabled?: boolean;
  }

const Button = styled.button<ButtonProps>`
display: block;
border-radius: 5px;
padding: 2rem 2rem;
margin: 20px 0px;
color: white;
background: ${(props) =>
  props.disabled ? "rgb(0,0,0,.2)" : "var(--color-primary)"};
font-family: "Roboto", sans-serif;
font-size: 18px;
text-decoration: none;
text-align: center;
cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
${(props) =>
  props.disabled &&
  css({
    pointerEvents: "none",
  })}
`;

export default Button;