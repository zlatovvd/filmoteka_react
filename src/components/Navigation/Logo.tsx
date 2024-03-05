import css from "./Logo.module.css";
import logo from "../../images/logo.png";
import { NavLink } from "react-router-dom";

interface LinkProps {
  to: string;
}

export const Logo = (props: LinkProps) => {
  return (
    <NavLink {...props} className={`${css.logoLink} link`}>
      <img src={logo} alt="" width="24px" height="24px" />
      <span className={css.logoDiscription}>Filmoteka</span>
    </NavLink>
  );
};
