import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "./Logo";
import { IoMdStats } from "react-icons/io";
import { MdOutlineAlignHorizontalLeft, MdPostAdd } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { useSelector } from "react-redux";
import { tablette } from "../util/responsive";
import NavLinks from "./NavLinks";

const SideBar = () => {
  const { showSideBar } = useSelector((store) => store.component);
  const containerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const { width: menuWidth } = menuRef.current.getBoundingClientRect();
    if (showSideBar) {
      containerRef.current.style.width = `${menuWidth}px`;
    } else {
      containerRef.current.style.width = "0px";
    }
  }, [showSideBar]);

  return (
    <Wrapper ref={containerRef}>
        <Logo />
        <div className="sidebar-menu-container" ref={menuRef}>
          <NavLinks />
        </div>
    </Wrapper>
  );
};

export default SideBar;

const Wrapper = styled.aside`
  position: sticky;
  top: 0;

  width: 200px;
  background: white;
  min-height: 100vh;
  height: 100%;
  overflow: hidden;
  padding-top: 30px;
  text-align: center;
  transition: var(--transition);
  ${tablette({ display: "none" })}
  
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0px;
    width: 1px;
    height: calc(100% - 119px);
    background: var(--grey-200);
  }


  .sidebar-menu-container {
    width: 400px;
  }

  .sidebar-menu {
    margin-top: 80px;
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
      background-color: var(--grey-50);
    }
  }
`;
