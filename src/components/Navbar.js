import React, { useState } from "react";
import styled from "styled-components";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  closeBigSideBar,
  toggleLogout,
  toggleSideBar,
} from "../features/component/componentSlice";
import { logoutUser } from "../features/user/userSlice";
import { mobile } from "../util/responsive";

const Navbar = () => {
  const { showLogout } = useSelector((store) => store.component);
  const {user} = useSelector(store => store.user)
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(closeBigSideBar());
    dispatch(toggleLogout());
    dispatch(logoutUser());
  }
  return (
    <Wrapper>
      <button
        className="header-toggle-button"
        onClick={() => dispatch(toggleSideBar())}
      >
        <FaBars />
      </button>
      <h1 className="header-title">Dashboard</h1>
      <div className="header-actions">
        <span
          className="header-actions-user"
          onClick={() => dispatch(toggleLogout())}
        >
          <FaUserCircle />
          {user.name}
          <RiArrowDownSLine />
        </span>
        <div className={`header-actions-logout ${showLogout ? "show" : ""}`}>
          <p>{user.email}</p>
          <hr />
          <button onClick={logout}>Logout</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.header`
position: sticky;
top:0;
z-index: 999;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  height: 120px;
  padding: 10px 30px;
  width: 100%;
  border-bottom: 1px solid var(--grey-200);

  .header-toggle-button {
    font-size: 35px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-500);
    cursor: pointer;
  }

  .header-actions {
    align-items: center;
    position: relative;
    display: flex;
    .header-actions-logout {
      background: white;
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      transform: translateY(100%);
      box-shadow: 2px 2px 7px var(--grey-100);
      padding: 10px;
      text-align: center;
      border-radius: 5px;
      display: none;
    }

    .header-actions-logout.show {
      display: block;
    }

    p {
      font-size: 11px;
      letter-spacing: 1px;
      margin: 10px 0;
      color: var(--grey-700);
      font-weight: bold;
      text-overflow: ellipsis;
      width: 80%;
      
    }

    button {
      background: transparent;
      border: none;
      color: tomato;
      font-weight: bold;
      text-decoration: underline;
      text-shadow: 0 1px 2px tomato;
      cursor: pointer;
    }

    button:hover {
      opacity: 0.7;
    }
  }

  .header-title {
    margin: 0;
    padding: 0;
    ${mobile({display: 'none'})}
  }

  .header-actions-user.show {
    display: flex;
  }

  .header-actions-user {
    background-color: var(--primary-500);
    padding: 5px 10px;
    color: white;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 5px;
  }
`;
