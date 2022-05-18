import React from 'react';
import JobForm from './JobForm';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';

const JobModal = () => {
    const {showJobModal} = useSelector(store => store.component);
    const dispatch = useDispatch();
  return (
    <Wrapper show = {showJobModal}>
        <JobForm/>
    </Wrapper>
  )
}

export default JobModal

const Wrapper = styled.div`
position: fixed;
height: 100vh;
width: 100%;
background: rgb(0 0 0 / 0.2);
display: flex;
align-items: center;
justify-content: center;
transition: var(--transition);
transform: scale(${props => props.show ? '1' : '0'});
z-index: 999;

`