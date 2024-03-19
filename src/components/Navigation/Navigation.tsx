import { NavList } from './NavList';
import css from './Navigation.module.css';
import { Logo } from './Logo';

export const Navigation = () => {
     return (
        <nav className={css.navigation}>
            <Logo to='/'/>
            <NavList/>
          </nav>
     )
}