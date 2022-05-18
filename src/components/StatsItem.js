import React from 'react'
import styled from 'styled-components'
const StatsItem = ({title, value,icon,color, background}) => {
  return (
    <Wrapper color={color} background ={background}>
       <div className='stats-item-info'>
           <span>{value}</span>
           <span className='icon'>{icon}</span>
       </div>
       <p className='stats-item-title'>{title}</p>
    </Wrapper>
  )
}

export default StatsItem;

const Wrapper = styled.article`
flex: 1;
background: white;
border-radius: 5px;
padding: 2rem;
border-bottom: 5px solid ${props => props.color} ;

.stats-item-info{
    display: flex;
    justify-content: space-between;
    font-size: 3rem;
    color: ${props => props.color};
    align-items: center;

    .icon{
        background: ${props => props.background};
        height: 4rem;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

.stats-item-title{
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
    padding: 0;
}

`