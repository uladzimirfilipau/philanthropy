import styled from 'styled-components';

const Button = styled.button`
  width: fit-content;
  display: block;
  padding: 24px 38px;
  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  box-shadow: 3px 3px 5px rgba(43, 43, 43, 0.2);
  cursor: pointer;

  text-decoration: none;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: center;
  white-space: nowrap;

  transition: 300ms ease;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  &:hover {
    transform: translate3d(0px, -3px, 0.01px);
  }
`;

export const OrangeButton = styled(Button)`
  color: #000;
  background-color: #ff9c08;

  &:hover {
    color: #fff;
    background-color: #f08200;
  }
`;

export const WhiteButton = styled(Button)`
  color: #000;
  background-color: #fff;
  outline: 1px solid #dad1ca;

  &:hover {
    color: #fff;
    background-color: #000;
    outline: none;
  }
`;

export const BlackButton = styled(Button)`
  color: #fff;
  background-color: #000;

  &:hover {
    color: #000;
    background-color: #fff;
    outline: 1px solid #dad1ca;
  }
`;

export const NavButton = styled(Button)`
  color: #000;
  background-color: #fff;
  outline: 1px solid #dad1ca;
  padding: 18px 28px;

  &:hover {
    color: #fff;
    background-color: #000;
    outline: none;
  }
`;
