import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import styled from "styled-components";
import { FormGroup } from "../../components";
import { updateUser } from "../../features/user/userSlice";
import { largeScreen, mobile, tablette } from "../../util/responsive";

const Profile = () => {
  const { user, isLoading } = useSelector((store) => store.user);
  const [values, setValues] = useState({
    name: user?.name || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    location: user?.location || "",
  });
  const dispatch = useDispatch();
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    
    setValues(prevValues => {
      return {...prevValues, [name] : value};
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const {name, lastName, email, location} = values;
    if(!name || !lastName || !email || !location){
      toast.error('you must fill all fields !');
      return;
    }

    dispatch(updateUser(values));


  }
  return (
    <Wrapper>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <FormGroup
          type="text"
          name="name"
          value={values.name}
          label="Name"
          handleChange={handleChange}
        />
        <FormGroup
          type="text"
          name="lastName"
          value={values.lastName}
          label="Last Name"
          handleChange={handleChange}
        />
        <FormGroup
          type="email"
          name="email"
          value={values.email}
          label="Email"
          handleChange={handleChange}
        />
        <FormGroup
          type="text"
          name="location"
          value={values.location}
          label="Location"
          handleChange={handleChange}
        />
        <button type="submit" className="btn submit-btn" disabled={isLoading}>{isLoading ? 'Please Wait...' : 'Save Changes'}</button>
      </form>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.section`
  background: white;
  padding: 50px;
  ${mobile({padding: '15px'})}
  form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    ${tablette({gridTemplateColumns: '1fr'})}

    button{
      height: 40px;
    }

    button:disabled{
      opacity: 0.4;
    }
  }
`;
