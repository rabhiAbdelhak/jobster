import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";

//local imports
import { Logo, FormGroup } from "../components";
import { mobile, tablette } from "../util/responsive";
import { loginUser, registerUser } from "../features/user/userSlice";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};



const Register = () => {
  const [values, setValues] = useState(initialState);
  const {isLoading, isAuth} = useSelector(store => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
     if(isAuth){
       setTimeout(() => {
         navigate('/');
       },1500);
     }
  }, [isAuth, navigate])

  const connectTestUser = () => {
    dispatch(loginUser({email: 'testUser@test.com', password: 'secret'}));
  }

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    setValues(prevValues => {
      return {...prevValues, [name] : value}
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {email, password, name, isMember} = values;
    if(!email || !password || (!isMember && !name)){
      toast.error('You must fill all fields');
      return;
    }

    if(isMember){
      dispatch(loginUser({email, password}));
      return;
    }
    dispatch(registerUser({name, email, password}))

   
  };

  const toggleMember = () => {
    setValues((prevValues) => {
      return { ...prevValues, isMember: !prevValues.isMember };
    });
  };
  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <Logo />
        <h2 className="form-title">{values.isMember ? "Login" : "Register"}</h2>
        {!values.isMember && (
          <FormGroup
            type="text"
            name="name"
            label="Name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        <FormGroup
          type="email"
          name="email"
          label="Email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormGroup
          type="password"
          name="password"
          label="Password"
          value={values.password}
          handleChange={handleChange}
        />
        <button className="btn form-btn-submit" type="submit" disabled={isLoading}>
          {isLoading ? 'Connecting...':'Submit'}
        </button>
        <button className="btn form-btn-demo" type="button" disabled={isLoading} onClick={connectTestUser}>
          {isLoading ? 'Connecting...': 'Test User'}
        </button>
        <div className="form-member-text">
          <p>
            {values.isMember
              ? "You are not a member ?"
              : "You Already have a count"}{" "}
            <button onClick={toggleMember} type='button'>
              {values.isMember ? "Register" : "Connect"}
            </button>
          </p>
        </div>
      </form>
    </Wrapper>
  );
};

export default Register;

const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px;
    min-width: 35vw;
    max-width: 90vw;
    background-color: white;
    border-radius: 8px;
    box-shadow: 5px 5px 10px var(--grey-600);
    ${tablette({padding: '40px 30px', width:'50vw' })}
    ${mobile({padding: '20px 15px' , width: '95vw'})}
    .form-title {
      margin-top: 20px;
    }

    button {
      display: block;
      padding: 10px 20px;
      width: 100%;
      margin-top: 20px;
    }

    button:disabled{
      opacity: 0.4;
    }

    .form-btn-demo {
      background-color: var(--primary-200);
      color: var(--primary-700);
    }

    a {
      color: var(--primary-300);
      cursor: pointer;
      font-weight: bold;
    }
  }
`;
