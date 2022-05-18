import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { clearFilter, handleFilterChange } from '../features/alljobs/alljobsSlice'
import { handleChange } from '../features/job/jobSlice'
import { mobile } from '../util/responsive'
import FormGroup from './FormGroup'
import FormGroupSelect from './FormGroupSelect'

const FilterContainer = () => {
  const {search, filterStatus, filterType, filterSort , filterSortOptions, isLoading} = useSelector(store => store.alljobs);
  const {jobTypeOptions, statusOptions} = useSelector(store => store.job)
  const dispatch = useDispatch();

  const handleFilterInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if(isLoading) return;
    dispatch(handleFilterChange({name, value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <Wrapper>
      <h4>Search the Jobs you want to find</h4>
      <form onSubmit={handleSubmit}>
        {/* search by term */}
        <FormGroup type='text' value={search} handleChange={handleFilterInput} name='search' label='Search'/>
        {/* search by status */}
        <FormGroupSelect name='filterStatus' value={filterStatus} handleChange={handleFilterInput} options={['all',...statusOptions]} label='Status'/>
        {/* search by type */}
        <FormGroupSelect name='filterType' value={filterType} handleChange={handleFilterInput} options={['all',...jobTypeOptions]} label='Job Type'/>
        {/* Sort on selected order */}
        <FormGroupSelect name='filterSort' value={filterSort} handleChange={handleFilterInput} options={['all',...filterSortOptions]} label='Sort'/>
        <button type='button' className='btn clear-filter-btn' onClick={() => dispatch(clearFilter())}>Clear Filter</button>
      </form>
    </Wrapper>
  )
}

export default FilterContainer

const Wrapper = styled.section`
background: white;
padding: 2rem;
h4{
  text-align: center;
  text-decoration: underline;
}
form{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap : 10px;
  ${mobile({gridTemplateColumns: '1fr'})}
}

.clear-filter-btn{
  background: tomato;
  height: 40px;

  :hover{
    opacity: 0.7;
  }
}
`