import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Header = styled.header`
  background-image: linear-gradient(
    to bottom,
    rgb(51, 68, 57),
    rgb(21, 27, 23)
  );
`;

export const Nav = styled.nav`
  position: relative;
  display: flex;
  gap: 25px;
  padding-left: 100px;
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;
  padding: 15px 0;

  font-weight: 500;
  font-size: 20px;
  color: inherit;
  text-decoration: none;
  color: rgb(156, 156, 156);
  transition: all 350ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: var(--main-txt-color);
  }

  &:hover,
  &.active:hover {
    color: var(--txt-hover-color);
  }
`;
