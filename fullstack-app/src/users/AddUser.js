import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./adduser.css";

export default function AddUser() {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    empId: "",
    name: "",
    username: "",
    email: "",
  });

  const { name, empId, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8072/user", user);
    navigate("/");
  };

  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <div className="register">
            <h1 className="text-center m-4">Register User</h1>

            <div className="main">
              <form onSubmit={(e) => onSubmit(e)}>
                <div className="mb-3">
                  <label htmlFor="EmpId" className="emp-details">
                    EmpId
                  </label>
                  <input
                    type={"number"}
                    className="form-control"
                    placeholder="Enter your employee id"
                    required
                    name="empId"
                    value={empId}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Name" className="emp-details">
                    Name
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    name="name"
                    value={name}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Username" className="emp-details">
                    Username
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your username"
                    required
                    name="username"
                    value={username}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="emp-details">
                    E-mail
                  </label>
                  <input
                    type={"text"}
                    className="form-control"
                    placeholder="Enter your e-mail address"
                    required
                    name="email"
                    value={email}
                    onChange={(e) => onInputChange(e)}
                  />
                </div>
                <div className="">
                  <button type="submit" className="btn-primary">
                    Submit
                  </button>
                  <Link to="/">
                    <button className="close-btn">Cancel</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
