import { ReactNode } from "react";
import css from "./PaginationItem.module.css";

type LinkProps = {
  page: number;
  isActive?: boolean;
  setCurrentPage: (page:number)=>void;
};

export const PaginationItem = ({
  page,
  isActive,
  setCurrentPage,
}: LinkProps) => {
  const handleClick = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setCurrentPage(page);
  };

  return (
    <li className={`${css.paginationItem} ${isActive ? css.active : ""}`}>
      <a href="/#" className={css.paginationLink} onClick={handleClick}>
        {page}
      </a>
    </li>
  );
};

export const PaginationItemNext = (props: {
  handleClickNext: () => void;
  children: ReactNode;
  isStyled?: boolean;
}) => {
  const handleClickNext = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    props.handleClickNext();
  };

  return (
    <li className={css.paginationItem}>
      <a
        href="/#"
        className={`${css.paginationLink} ${
          props.isStyled ? css.linkStyled : ""
        } link`}
        onClick={handleClickNext}
      >
        {props.children}
      </a>
    </li>
  );
};
