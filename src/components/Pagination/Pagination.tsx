import { useEffect, useState } from "react";
import css from "./Pagination.module.css";
import { PaginationItem, PaginationItemNext } from "./PaginationItem";
import left from "../../images/arrow-left.svg";
import right from "../../images/arrow-right.svg";
import more from "../../images/more.svg";
import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  currentPage:number;
  totalPages:number;
  handleChangePagination: (currentPage:number)=>void;
}

export const Pagination = (props: PaginationProps) => {

  const {handleChangePagination} = props;
  

  const [searchParams, setSearchParams] = useSearchParams();

  const [currentPage, setCurrentPage] = useState<number>(Number(searchParams.get('page')) ?? 1);

  //setCurrentPage(Number(searchParams.get('page')) ?? 1);

  console.log('pagin page', currentPage);

  const arr: number[] = [];

  let startPage: number = 1;
  let endPage: number = 5;
  let leftEmpty = false;
  let rightEmpty = false;

  const handlePageClick = (page:number) => {
    setCurrentPage(page);
  }

  const handleRightClick = () => {
    setCurrentPage((prev) => {
      if (prev === props.totalPages) return props.totalPages;
      return prev + 1;
    });
  };

  const handleRightClickNext = () => {
    setCurrentPage(
      currentPage + 5 <= props.totalPages ? currentPage + 5 : props.totalPages
    );
  };

  const handleLeftClick = () => {
    setCurrentPage((prev) => {
      if (prev === 1) return 1;
      return prev - 1;
    });
  };

  const handleLeftClickNext = () => {
    setCurrentPage(currentPage - 5 >= 1 ? currentPage - 5 : 1);
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

  useEffect(() => {
    //handleChangePagination(currentPage);
    searchParams.set('page', currentPage.toString());
    console.log('use pagin page', currentPage);
    setSearchParams(searchParams);
  }, [currentPage]);

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
            setCurrentPage={setCurrentPage}
          />
        </>
      )}
      <PaginationItemNext handleClickNext={handleRightClick} isStyled>
        <img src={right} alt="" />
      </PaginationItemNext>
    </ul>
  );
};
