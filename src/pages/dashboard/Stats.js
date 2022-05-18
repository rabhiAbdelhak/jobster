import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { StatsContainer , ChartContainer} from '../../components'
import Loading from '../../components/Loading'
//local imports
import { getStats } from '../../features/alljobs/alljobsSlice'

const Stats = () => {
  const {isLoading, stats , totalJobs} = useSelector(store => store.alljobs);
  console.log(stats);
  const dispatch = useDispatch()
  
  useEffect(() => {
   dispatch(getStats());
  }, [])
  
  if(isLoading) return <Wrapper><Loading/></Wrapper>
  return (
    <Wrapper>
      <StatsContainer stats= {stats}/>
      {totalJobs > 0 && <ChartContainer/>}
    </Wrapper>
  )
}

export default Stats

const Wrapper = styled.main``
