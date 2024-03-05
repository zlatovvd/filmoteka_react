import { NavLink } from "react-router-dom";
import css from "./NavList.module.css";
import styled from "styled-components";

export const NavList = () => {
  
  const StyledLink = styled(NavLink)`
    &.active::after {
      display: block;
      content: "";
      width: 100%;
      height: 3px;
      background: #ff001b;
    }
  `;

  return (
    <ul className={`${css.navList} list`}>
      <li className={css.navListItem}>
        <StyledLink to={"/"} className={`${css.navListLink} link`}>
          {"Home"}
        </StyledLink>
      </li>
      <li className={css.navListItem}>
        <StyledLink to={"/library"} className={`${css.navListLink} link`}>
          {"My library"}
        </StyledLink>
      </li>
    </ul>
  );
};
