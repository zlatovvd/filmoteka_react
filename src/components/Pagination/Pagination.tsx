import css from "./Pagination.module.css";
import { PaginationItem, PaginationItemNext } from "./PaginationItem";
import left from "../../images/arrow-left.svg";
import right from "../../images/arrow-right.svg";
import more from "../../images/more.svg";
import { usePageParams } from "../../hookes/usePageParams";

type PaginationProps = {
  totalPages:number;
}

export const Pagination = (props: PaginationProps) => {

  const {page, updatePage} = usePageParams();

  let currentPage:number = Number(page);
  
  const arr: number[] = [];

  let startPage: number = 1;
  let endPage: number = 5;
  let leftEmpty = false;
  let rightEmpty = false;

  const handlePageClick = (page:number) => {
    currentPage = page;
    updatePage(currentPage);
  }

  const handleRightClick = () => {
    currentPage = currentPage===props.totalPages ? props.totalPages : currentPage + 1;
    updatePage(currentPage);
  };

  const handleRightClickNext = () => {
    currentPage = currentPage + 5 <= props.totalPages ? currentPage + 5 : props.totalPages
    updatePage(currentPage);
  };

  const handleLeftClick = () => {
    currentPage = currentPage === 1 ? 1 : currentPage - 1;
    updatePage(currentPage);
  };

  const handleLeftClickNext = () => {
    currentPage = currentPage - 5 >= 1 ? currentPage - 5 : 1;
    updatePage(currentPage);
  };

  if (props.totalPages <= 5) {
    endPage = props.totalPages;
  }

  if (props.totalPages > 5) {
    if (currentPage < 5) {
      rightEmpty = true;
      startPage = 1;
      endPage = 5;
    } else {
      leftEmpty = true;
      startPage = currentPage - 2;
      if (currentPage < props.totalPages - 3) {
        rightEmpty = true;
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      } else if (currentPage === props.totalPages - 3) {
        rightEmpty = false;
        startPage = currentPage - 2;
        endPage = props.totalPages;
      } else {
        rightEmpty = false;
        startPage = props.totalPages - 4;
        endPage = props.totalPages;
      }
    }
  }

  for (let i = startPage; i <= endPage; i = i + 1) {
    arr.push(i);
  }

  return (
    <ul className={`${css.paginationList} list`}>
      <PaginationItemNext handleClickNext={handleLeftClick} isStyled>
        <img src={left} alt="" />
      </PaginationItemNext>
      {leftEmpty && (
        <>
          <PaginationItem page={1} setCurrentPage={handlePageClick} />
          <PaginationItemNext handleClickNext={handleLeftClickNext}>
            <img src={more} alt="" />
          </PaginationItemNext>
        </>
      )}
      {arr.map((item) => (
        <PaginationItem
          key={item}
          page={item}
          isActive={currentPage === item}
          setCurrentPage={handlePageClick}
        />
      ))}

      {rightEmpty && (
        <>
          <PaginationItemNext handleClickNext={handleRightClickNext}>
            <img src={more} alt="" />
          </PaginationItemNext>
          <PaginationItem
            page={props.totalPages}
            setCurrentPage={handlePageClick}
          />
        </>
      )}
      <PaginationItemNext handleClickNext={handleRightClick} isStyled>
        <img src={right} alt="" />
      </PaginationItemNext>
    </ul>
  );
};
