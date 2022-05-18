import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import AreaChart from './AreaChart';
import BarChart from './BarChart';

const ChartContainer = () => {
    const [barChart, setBarChart] = useState(true);
    const {monthlyApplications: data} = useSelector(store => store.alljobs);
    console.log(data);
    
  return (
    <Wrapper>
        <h4>Mounthly Applications</h4>
        <button onClick={() => setBarChart(prev => !prev)}>{barChart ? 'Area Chart' : 'Bar Chart'}</button>
        <div>
            {barChart ? <BarChart data={data}/> : <AreaChart data={data}/>}
        </div>
    </Wrapper>
  )
}

export default ChartContainer;

const Wrapper = styled.section`
text-align: center;
margin-top: 3rem;

h4{
font-size: 2.5rem;
}

button{
    background-color: transparent;
    border: none;
    color: var(--primary-500);
    font-weight: bold;
    cursor: pointer;

}
button:hover{
    opacity: 0.4;
}
`