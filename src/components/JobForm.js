import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { FaWindowClose } from 'react-icons/fa';

//local imports
import FormGroup from "./FormGroup";
import FormGroupSelect from "./FormGroupSelect";
import { mediumScreen, mobile } from "../util/responsive";
import { closeJobModal } from '../features/component/componentSlice';

import {
  clearJobValues,
  createJob,
  editJob,
  handleChange,
} from "../features/job/jobSlice";

const JobForm = () => {
  const {
    isLoading,
    jobLocation,
    position,
    company,
    jobType,
    status,
    isEditing,
    statusOptions,
    jobTypeOptions,
    editJobId
  } = useSelector((store) => store.job);

  const dispatch = useDispatch();
  const handleInputJob = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    dispatch(handleChange({ value, name }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobLocation || !position || !company || !jobType || !status) {
      toast.error("You must fill all fields !");
      return;
    }
    if(isEditing){
       dispatch(editJob({ jobId : editJobId, job :{ jobLocation, position, company, jobType, status }}));
       return;
    }
    dispatch(createJob({ jobLocation, position, company, jobType, status }));
    
  };
  return (
    <Wrapper>
      <h1>{isEditing ? "Edit Job" : "Add Job"}</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup
          type="text"
          name="position"
          value={position}
          handleChange={handleInputJob}
          label="Position"
        />
        <FormGroup
          type="text"
          name="company"
          value={company}
          handleChange={handleInputJob}
          label="Company"
        />
        <FormGroup
          type="text"
          name="jobLocation"
          value={jobLocation}
          handleChange={handleInputJob}
          label="Job Location"
        />
        <FormGroupSelect
          name="status"
          value={status}
          options={statusOptions}
          handleChange={handleInputJob}
          label="Status"
        />
        <FormGroupSelect
          name="jobType"
          value={jobType}
          options={jobTypeOptions}
          handleChange={handleInputJob}
          label="Job Type"
        />
        <span></span>
        <div className="form-buttons">
          <button className="btn form-submit-btn" type="submit" disabled={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </button>
          <button
            className="btn form-clear-btn"
            type="button"
            onClick={() => dispatch(clearJobValues())}
            disabled={isLoading}
          >
            Clear
          </button>
        </div>
      </form>
      <button className='job-modal-close-btn' onClick={() => dispatch(closeJobModal())}><FaWindowClose/></button>
    </Wrapper>
  );
};

export default JobForm;

const Wrapper = styled.section`
  background-color: white;
  padding: 40px;
  border-radius: 5px;
  position: relative;
  ${mobile({ padding: "20px" })}
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    ${mediumScreen({gridTemplateColumns: '1fr', gap: '15px'})}
    ${mobile({ gridTemplateColumns: "1fr", gap: '10px'})}
    .form-buttons {
      display: flex;
      gap: 10px;
      height: fit-content;
      ${mobile({ flexDirection: "column", alignItems: "stretch" })}
    }
    button {
      height: 40px;
      flex: 1;
      display: block;
    }

    button:disabled{
      opacity: 0.4;
    }

    .form-clear-btn {
      background-color: tomato;
    }
  }

  .job-modal-close-btn{
    background-color: transparent;
    font-size: 25px;
    position: absolute;
    top: 20px;
    right: 20px;
    color: tomato;
    border: none;
}
`;
