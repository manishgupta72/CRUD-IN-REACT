import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUser } from "./features/userSlice";

const Home = () => {
    const user=useSelector(state=>state.users)
    const dispatch=useDispatch()
    console.log(user);
  return (
    <>
      <div className="container">
        <h2>CRUD App with JSON Server</h2>
        <Link to="/create" className="btn btn-success my-3">Create +</Link>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
                user.map((val,index)=>
                 (
                    <>
                    <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.email}</td>
                    <td>
                        <Link to={`/edit/${val.id}`} className="btn btn-primary mx-2">Edit </Link>
                         
                        <button className="btn btn-danger" onClick={()=>dispatch(deleteUser(val.id))}>Delete</button>
                    </td>
                    </tr>
                    </>
                )
                )
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
