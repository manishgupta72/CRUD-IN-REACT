import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "./features/userSlice";
import { useNavigate } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

const Create = () => {
 const user=useSelector(state=>state.users)
 const dispatch=useDispatch()
 const navigate=useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({id: nanoid(),name,email}))
    navigate('/')
  };
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center ">
        <div className="w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleSubmit}>
            <h2>Add New User..</h2>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
               
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className="btn btn-info" >submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
