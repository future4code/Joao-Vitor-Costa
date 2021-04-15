import styled from "styled-components"
import "../App.css";

export const Button = styled.button`
  font-family: "Zen Dots", cursive;
  color: white;
  background-color: transparent;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-transition: color 1000ms;
  transition: color 1000ms;
  width: 16vh;
  height: 4vh;
  border: 2px solid white;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: white;
    transform: scaleY(0);
    transform-origin: 50% 100%;
    -webkit-transition: 300ms ease-out;
    transition: 300ms ease-out;
  }
  &:hover:before {
    -webkit-transform: scaleY(1);
    transform: scaleY(1);
  }
  &:hover {
    cursor: pointer;
    color: #000080;
  }
`

export const Input = styled.input`
    width: 20vw;
    height: 5vh;
    outline: 0;
    background: transparent;
    color: white;
    border: 2px solid white;
    ::placeholder{
      color: white;
    }
`

export const Select = styled.select`
    width: 20.4vw;
    height: 5vh;
    outline: 0;
    background: black;
    border: 2px solid white;
    color: white;
`