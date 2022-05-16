import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import {HiCalendar, HiDotsVertical, HiLocationMarker} from 'react-icons/hi'
import {FaBusinessTime, FaEdit} from 'react-icons/fa'
import {MdDeleteOutline} from 'react-icons/md';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteJob, getJobToEdit } from '../features/job/jobSlice';
import { useNavigate } from 'react-router-dom';
import { openJobModal } from '../features/component/componentSlice';

const Job = ({_id, jobLocation, position, status, jobType, createdAt, company}) => {
  const [showActions , setShowActions] = useState(false)
  const reference = useRef(null)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const closeActions = () => {
    setShowActions(false)
  }

  const toggleActions = () => {
    setShowActions(prevShow => !prevShow);
  }
  const setEditJob = () => {
    dispatch(getJobToEdit({editJobId:_id, jobLocation, position, status, jobType, createdAt, company}));
    dispatch(openJobModal());
  }
  return (
    <Wrapper>
      <header>
        <div className='job-picture'>{company.slice(0, 1).toUpperCase()}</div>
        <div className='job-main-info'>
           <h3>{position}</h3>
           <p className='job-company'>{company}</p>
        </div>
      </header>
        <hr/>
        <div className='job-secondary-info'>
          <p className='job-location'><HiLocationMarker className='icon'/>{jobLocation}</p>
          <p className='job-date'><HiCalendar className='icon'/>{moment(createdAt).format('MMM Do YYYY')}</p>
          <p className='job-type'><FaBusinessTime className='icon'/>{jobType}</p>
        </div>
        <span className={`job-status ${status}`}>{status}</span>
        <span className='job-options' onClick={toggleActions}><HiDotsVertical/></span>
        <div className={`job-actions ${showActions && 'show-actions'}`} ref={reference}>
          <button className='job-actions-edit' onClick={setEditJob}><FaEdit/>Edit</button>
          <button className='job-actions-delete' onClick={() => dispatch(deleteJob(_id))}><MdDeleteOutline/>Delete</button>
        </div>
    </Wrapper>
  )
}

export default Job

const Wrapper = styled.article`
background-color: white;
padding: 20px 15px;
border-radius: 5px;
box-shadow: 2px 3px 7px rgb(0 0 0 / 0.2);
position: relative;

header{
  display: flex;
  align-items: flex-start;
  gap: 5px;

  .job-picture{
    background-color: var(--primary-500);
    height: 30px;
    width: 30px;
    color: white;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
  }

  .job-main-info{
    margin-left: 5px;
    
    h3{
    font-size: 1rem;
    line-height: 1;
    margin: 0;
    font-weight: bold;
    }

    .job-company{
      margin: 0;
      color: var(--grey-400);
      font-size: 0.8rem;
      text-transform: capitalize;
    }

  }
  
}

.job-secondary-info{
    p{
      margin: 2px;
      padding: 0;
      color: var(--grey-600);
      text-transform: capitalize;
      .icon{
        margin-right: 10px;
      }
    }
  }

.job-status{
  background-color: #777;
  padding: 3px 10px;
  margin-top: 10px;
  display: block;
  width: fit-content;
  border-radius: 5px;
  color: white;
  text-transform: capitalize;
}

.job-options{
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;

}

.job-actions{
  position: absolute;
  background: white;
  width: 100px;
  padding: 15px 5px;
  right: 2px;
  top: 35px;
  box-shadow: 3px 3px 7px rgb(0 0 0 / 0.5);
  border-radius: 5px;
  display: none;

  button{
    background: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
    border: none;
    font-size: 1rem;
    margin-bottom: 8px;
    cursor: pointer;
  }

  .job-actions-delete:hover{
    color: tomato;
  }
  .job-actions-edit:hover{
    color: var(--grey-600);
  }
}

.job-actions.show-actions{
  display: block;
}

.job-actions::before{
content: '';
width: 0;
height: 0;
border-width: 10px;
border-style: solid;
border-color: transparent transparent white transparent;
position: absolute;
top: -20px;
right: 0px;
background-color: transparent;
}

.job-options:hover{
  opacity: 0.4;
}

.interview{
  background: rgb(173, 215, 243);
  color: rgba(0, 153, 255);
}

.declined{
  background: rgb(236, 183, 173);
  color: tomato;
}

.pending{
  background: rgb(163, 209, 163);
  color: rgb(17, 126, 17);
}

`