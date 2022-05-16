import React from 'react'
import styled from 'styled-components';

const FormGroupSelect = ({label , name, value, options, handleChange}) => {
  return (
    <Wrapper className='form-group'>
      <label htmlFor={name}>{label}</label>
      <select name={name} value={value} onChange={handleChange}>
         {options.map((option, index) => {
             return <option key={index} vlaue={option}>{option}</option>
         })}
      </select>
    </Wrapper>
  )
}

export default FormGroupSelect

const Wrapper= styled.div`
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
      width: 100%;

      label {
        font-size: 1.2rem;
        color: var(--grey-700);
      }

      select {
        padding: 5px;
        border-radius: 5px;
        height: 40px;
        background-color: white;
        border: 1px solid var(--grey-300);
        text-transform: capitalize;
      }
`