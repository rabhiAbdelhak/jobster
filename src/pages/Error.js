import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//local imports
import errorImg from "../assets/images/not-found.svg";
import { tablette } from "../util/responsive";

const Error = () => {
  return (
    <Wrapper>
      <div className="error-image-holder">
        <img src={errorImg} alt="notfound" />
      </div>
      <div className="error-text">
        <h3>Opps ! Page Not Found</h3>
        <p>It seems the the Page you are looking for does not exist !</p>
        <Link to="/">Back Home</Link>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  padding: 20px;
  ${tablette({ justifyContent: "center" })};

  .error-image-holder {
    max-width: 80%;
    max-height: 60vh;
    margin: 30px auto;
    display: flex;
    align-items: flex-end;
    ${tablette({ maxWidth: "99%" })}

    img {
      width: 100%;
      height: 100%;
    }
  }

  .error-text {
    text-align: center;
    p {
      line-height: 1.7;
      font-size: 1.2rem;
      color: var(--grey-600);
    }
  }
`;
