import css from "./NavList.module.css";
import { StyledLink } from "../StyledLink/StyledLink";

export const NavList = () => {

  return (
    <ul className={`${css.navList} list`}>
      <li className={css.navListItem}>
        <StyledLink to={"/"} className={`${css.navListLink} link`}>
          {"Home"}
        </StyledLink>
      </li>
      <li className={css.navListItem}>
        <StyledLink to={"/library/watched"} className={`${css.navListLink} link`}>
          {"My library"}
        </StyledLink>
      </li>
    </ul>
  );
};
