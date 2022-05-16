import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//local imports
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import { Logo } from "../components";
import {tablette} from '../util/responsive';

const Landing = () => {
  return (
    <Wrapper className="landing">
      <nav className="container">
        <Logo/>
      </nav>
      <div className="container page">
        <div className="landing-text">
          <h1>
            Job <strong>tracking</strong> App
          </h1>
          <p>
            I'm baby lomo cornhole cardigan chicharrones truffaut trust fund,
            direct trade thundercats venmo kitsch letterpress tacos microdosing
            poutine,direct trade thundercats venmo kitsch letterpress tacos
            microdosing poutine.
          </p>
          <Link className="btn landing-btn" to='/Register'>Login/Register</Link>
        </div>
        <div className="landing-image-holder">
          <img src={main} alt="landingimage" />
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;

const Wrapper = styled.main`
  min-height: 100vh;
  nav {
    height: var(--nav-height);
    display: flex;
    align-items: center;
    margin: 0 auto;
    width: var(--fluid-width);
  }

  .page {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - var(--nav-height));
  }

  .landing-image-holder {
    flex: 1;
  }

  .landing-image-holder img {
    max-width: 100%;
    height: 100%;
    ${tablette({display: 'none'})}

  }

  .landing-text {
    max-width: 45%;
    ${tablette({maxWidth: '90%', textAlign: 'center'})}
    p {
      line-height: 1.7;
      font-size: 1.3rem;
      color: var(--grey-600)
    }

    h1 {
      font-size: 4rem;
      flex: 1;
      strong {
        color: var(--primary-600);
      }
    }

    button {
    padding: 10px 15px;
    font-size: 1.3rem;
    }
  }
`;
