import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

//local imports
import { JobModal, Navbar , SideBar} from '../components'
import BigSidebar from '../components/BigSidebar';
import { mediumScreen, mobile } from '../util/responsive';

const SharedLayout = () => {
  return (
    <Wrapper>
   
    <SideBar/>
    <BigSidebar/>
    <div className='dashboard'>
      <Navbar/>
      <div className='dashboard-content'>
        <Outlet/>
      </div>
    </div>
    <JobModal/>
    </Wrapper>
  )
}

export default SharedLayout

const Wrapper = styled.main`
display: flex;
width: 100%;

.dashboard {
  width: 100%;
}

.dashboard-content{
  min-height: calc(100vh - 120px);
  padding: 40px 80px;
  ${mediumScreen({padding: '30px 40px'})}
  ${mobile({padding: '20px 10px'})}
}
`