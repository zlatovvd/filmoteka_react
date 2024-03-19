import css from "./NavList.module.css";
import { StyledLink } from "../StyledLink/StyledLink";
import { useParams } from "react-router-dom";

export const NavList = () => {

  const { libName } = useParams();

  return (
    <ul className={`${css.navList} list`}>
      <li className={css.navListItem}>
        <StyledLink to={"/"} className={`${css.navListLink} link`}>
          {"Home"}
        </StyledLink>
      </li>
      <li className={css.navListItem}>
        <StyledLink to={`/library/${libName!=='queue' ? 'watched' : 'queue'}`} className={`${css.navListLink} link`}>
          {"My library"}
        </StyledLink>
      </li>
    </ul>
  );
};
