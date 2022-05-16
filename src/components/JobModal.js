import React from 'react';
import JobForm from './JobForm';
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux';
import { FaWindowClose } from 'react-icons/fa';
import { closeJobModal } from '../features/component/componentSlice';

const JobModal = () => {
    const {showJobModal} = useSelector(store => store.component);
    const dispatch = useDispatch();
  return (
    <Wrapper show = {showJobModal}>
        <button className='job-modal-close-btn' onClick={() => dispatch(closeJobModal())}><FaWindowClose/></button>
        <JobForm/>
    </Wrapper>
  )
}

export default JobModal

const Wrapper = styled.div`
position: fixed;
height: 100vh;
width: 100%;
background: rgb(0 0 0 / 0.6);
display: flex;
align-items: center;
justify-content: center;
transition: var(--transition);
transform: scale(${props => props.show ? '1' : '0'});
z-index: 999;
.job-modal-close-btn{
    background-color: transparent;
    font-size: 25px;
    position: absolute;
    top: 20px;
    right: 20px;
    color: tomato;
    border: none;
}
`