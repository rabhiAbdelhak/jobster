import React from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { largeScreen } from '../util/responsive';
import Job from './Job';
import Loading from './Loading';


const ListJob = () => {
  const {isLoading, jobs, totalJobs} = useSelector(store => store.alljobs);

  if(isLoading) return <Loading/>
  if(totalJobs === 0) return (
    <Wrapper>
      <h3>No Jobs Mentioned</h3>
    </Wrapper>
  )
  return (
    <Wrapper>
        <p>{totalJobs} Jobs Found </p>
        <div className='jobs-list'>
             {jobs.map(job => {
               return <Job key={job._id} {...job}/>
             })}
        </div>
    </Wrapper>
  )
}

export default ListJob

const Wrapper = styled.section`

.jobs-list{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
  gap: 15px;
  ${largeScreen({gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))'})}
}
`