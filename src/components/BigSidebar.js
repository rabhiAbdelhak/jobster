import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

//local imports
import { closeBigSideBar } from "../features/component/componentSlice";
import Logo from "./Logo";
import { largeScreen } from "../util/responsive";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

const BigSidebar = () => {
  const { showBigSideBar } = useSelector((store) => store.component);
  const dispatch = useDispatch();

  const close = () => {
    dispatch(closeBigSideBar())
  }
  return (
    <Wrapper show={showBigSideBar}>
      <div className="bigsidebar">
        <button
          className="bigsideBar-close"
          onClick={close}
        >
          <FaTimes/>
        </button>
        <Logo />
        <NavLinks closeSideBar = {close}/>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;

const Wrapper = styled.div`
  background-color: rgb(0 0 0 / 0.6);
  position: fixed;
  width: 100%;
  height: 100vh;
  transform: scale(${(props) => (props.show ? "1" : "0")});
  transition: var(--transition);
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  ${largeScreen({display: 'none'})}

  .bigsidebar {
    background: white;
    height: 70vh;
    width: 80vw;
    padding-top: 40px;
    text-align: center;
    transition: var(--transition);
    position: relative;
    border-radius: 5px;

    .bigsideBar-close {
      position: absolute;
      top: 20px;
      right: 20px;
      color: tomato;
      background: transparent;
      border: none;
      font-size: 30px;
      font-weight: bold;
      cursor: pointer;
    }

    .bigsideBar-close:hover{
        opacity: 0.7;
    }
  }
  .sidebar-menu {
    width: fit-content;
    margin: 40px auto;
    a {
      display: block;
      padding: 15px 30px;
      text-align: left;
      color: var(--grey-700);
      font-size: 1.2rem;
      transition: var(--transition);
      .icon {
        font-size: 1.4rem;
        margin-right: 10px;
      }
    }

    a:hover,
    a.active {
      color: var(--primary-500);
    }
  }
`;
