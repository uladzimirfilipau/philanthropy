import styled from 'styled-components';

export const Button = styled.button`
  display: none;
  transition: opacity 0.2s linear;

  @media screen and (max-width: 768px) {
    display: block;
    width: 33px;
    height: 21px;
    padding: 0;
    border: none;
    background-color: transparent;
    position: relative;
    right: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0px;
    left: 0px;
    width: 33px;
    height: 3px;
    background-color: #090909;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 33px;
    height: 3px;
    background-color: #090909;
  }

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 9px;
  left: 0px;
  width: 33px;
  height: 3px;
  background-color: #090909;
`;
