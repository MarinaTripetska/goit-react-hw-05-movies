import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  background-image: linear-gradient(180deg, #334439, #151b17);
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 35px;
  max-width: 260px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  position: relative;
  padding: 25px 0;
  font-size: 18px;
  font-weight: 500;
  color: var(--txt-color);
  transition: color 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #75db9c;
  }

  &.active {
    color: var(--main-txt-color);
  }
`;
