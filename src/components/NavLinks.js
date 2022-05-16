import React from 'react'
import {IoMdStats} from 'react-icons/io';
import {MdOutlineAlignHorizontalLeft, MdPostAdd} from 'react-icons/md';
import {AiOutlineProfile} from 'react-icons/ai'
import { NavLink } from 'react-router-dom';

const NavLinks = ({closeSideBar}) => {
  
  return (
    <ul className="sidebar-menu">
          <li>
            <NavLink to="/" onClick={closeSideBar}>
              <IoMdStats className="icon" />
              Stats
            </NavLink>
          </li>
          <li>
            <NavLink to="/all-jobs" onClick={closeSideBar}>
              <MdOutlineAlignHorizontalLeft className="icon" />
              All Jobs
            </NavLink>
          </li>
          <li>
            <NavLink to="/add-job" onClick={closeSideBar}>
              <MdPostAdd className="icon" />
              Add Job
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" onClick={closeSideBar}>
              <AiOutlineProfile className="icon" />
              Profile
            </NavLink>
          </li>
        </ul>
  )
}

export default NavLinks