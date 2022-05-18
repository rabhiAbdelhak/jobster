import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../features/alljobs/alljobsSlice";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const Pagination = () => {
  const { numOfPages, page } = useSelector((store) => store.alljobs);
  const dispatch = useDispatch();
  console.log(numOfPages);

  const nextPage = () => {
      console.log(page, 'start with');
      let newPage = page + 1;
      if( newPage > numOfPages){
         newPage = 1;
      }
      dispatch(changePage(newPage));
  }

  const prevPage = () => {
    let newPage = page - 1;
    console.log(newPage, 'from next')
    if( newPage <  1){
      newPage = numOfPages;
    }
    dispatch(changePage(newPage));
}
  const buttons = Array.from({ length: numOfPages }, (_, index) => {
      const newPage = index + 1;
    return (
      <button
        key={index}
        className={`page-btn ${page === newPage ? 'active' : ''}`}
        onClick={() => dispatch(changePage(newPage))}
      >
        {index + 1}
      </button>
    );
  });
  return (
    <Wrapper>
      <button className="page-move-btn " onClick={prevPage}><HiChevronDoubleLeft/></button>
      {buttons}
      <button className="page-move-btn " onClick={nextPage}><HiChevronDoubleRight/></button>
    </Wrapper>
  );
};

export default Pagination;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap:1px;
  
  .page-btn{
      background-color: var(--primary-200);
      color: var(--primary-500);
      border: none;
      padding: 5px;
      width: 30px;
      height: 30px;
      border-radius: 5px;
      font-weight: bold;
      cursor: pointer;
      transition: var(--transition);

  }
      .page-btn:hover, 
      .page-btn.active{
          background: var(--primary-500);
          color: white;
      }

      .page-move-btn{
         background-color: var(--grey-100);
         border: none;
         color: var(--primary-600);
         margin: 0 10px;
      }
`;
