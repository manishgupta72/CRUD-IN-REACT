import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateUser } from "./features/userSlice";

const Update = () => {
  const {id} = useParams();
  console.log(id);
  const user = useSelector((state) => state.users);

  const existUser = user.filter(f=> f.id == id);
  console.log(existUser);

  const { name, email } = existUser[0];

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleUpdate=(e)=>
  {
     e.preventDefault()
     dispatch(updateUser({
        id:id,
        name:uname,
        email:uemail
     }))
     navigate('/')
  }
  return (
    <>
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center ">
        <div className="w-50 border bg-secondary text-white p-5">
          <form onSubmit={handleUpdate}>
            <h2>Update User..</h2>
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={uname}
                onChange={(e)=>setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="name">Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={uemail}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <br />
            <button className="btn btn-info">submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Update;
