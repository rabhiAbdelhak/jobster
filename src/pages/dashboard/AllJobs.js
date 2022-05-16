import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
//local imports
import { ListJob, FilterContainer } from "../../components";
import { getAlljobs } from "../../features/alljobs/alljobsSlice";
import { openJobModal } from "../../features/component/componentSlice";
import { clearJobValues } from "../../features/job/jobSlice";

const AllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlljobs());
  }, []);

  return (
    <Wrapper>
      <FilterContainer />
      <ListJob />
      <AddButton
        onClick={() => {
          dispatch(clearJobValues());
          dispatch(openJobModal());
        }}
      >
        +
      </AddButton>
    </Wrapper>
  );
};

export default AllJobs;

const Wrapper = styled.main`
  position: relative;
`;

const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  position: fixed;
  bottom: 50px;
  right: 20px;
  background: var(--primary-500);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: var(--transition);

  :hover {
    transform: scale(1.1);
  }
`;
