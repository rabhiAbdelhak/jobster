import React from "react";
import styled from "styled-components";

const FormGroup = ({ type, name,value, handleChange, label }) => {
  return (
    <Wrapper className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        placeholder='...'
      />
    </Wrapper>
  );
};

export default FormGroup;

const Wrapper = styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 100%;

      label {
        font-size: 1.2rem;
        color: var(--grey-700);
      }

      input {
        padding: 10px;
        border-radius: 5px;
        height: 40px;
        border: 1px solid var(--grey-300);
      }
`;
