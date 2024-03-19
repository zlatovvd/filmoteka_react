import css from './Footer.module.css';
import { FC } from 'react';
import Icons from '../../images/icons.svg';

export const Footer: FC = () => {
  return (
    <div className={css.footerContainer}>
      <div>© 2020 | All Rights Reserved |</div>
      <div>
        <span className={css.footerDevText}>Developed with</span>
        <svg height="13" width="14">
          <use xlinkHref={`${Icons}#icon-favorite`}></use>
        </svg>
        <span className={css.footerStudText}>by GoIT Students</span>
      </div>
    </div>
  );
};
