import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  max-width: 260px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  position: relative;
  padding: 25px 0;
  font-size: 25px;
  font-weight: 500;
  color: white;

  &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: 22px;
    width: 0;
    height: 3px;
    background-color: #f39787;
    transition: width 200ms ease-in-out;
  }

  &:hover,
  &:focus,
  &.active {
    color: #f39787;

    &::after {
      width: 100%;
    }
  }
`;
