import css from "./Footer.module.css";
import { FC } from "react";
import Icons from '../../images/icons.svg';

export const Footer: FC = () => {
  return (
    <div className={css.footerContainer}>
      <span>© 2020 | All Rights Reserved |</span>
      <span>
        Developed with
        <svg height="13" width="14">
          {/* <use href="../../images/favorite.svg"></use> */}
          <use xlinkHref={`${Icons}#icon-favorite`}></use>
        </svg>
        by GoIT Students
      </span>
    </div>
  );
};
