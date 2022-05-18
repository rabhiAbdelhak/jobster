import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className='loading'></div>
    </Wrapper>
  )
}

export default Loading

const Wrapper = styled.div`
margin-top: 100px;
`