import { NavList } from './NavList';
import css from './Navigation.module.css';
import { Logo } from './Logo';

export const Navigation = () => {
     return (
        <nav className={css.navigation}>
          {/* <NavLink to="/" className={`${css.logoLink} link`}>
               <>
               <img src={logo} alt="" width="24px" height="24px" /> 
               <span className={css.logoDiscription}>Filmoteka</span>
               </>
          </NavLink> */}
            <Logo to='/'/>
            <NavList/>
          </nav>
     )
}