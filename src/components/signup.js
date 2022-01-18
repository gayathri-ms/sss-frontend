import React, { useState } from "react";
import { isAuthenticated, signup } from "../helper/auth";
import { Link, Redirect } from "react-router-dom";
const Signup = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = values;

  const [Msg, setMsg] = useState("");

  const handelChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    signup(username, email, password)
      .then((data) => {
        console.log("data is signup>>", data);
        // setMsg(data)
        window.location.replace("http://localhost:3001/signin");
        setValues({ ...values, username: "", email: "", password: "" });
      })
      .catch((err) => setMsg(err));
  };

  return (
    <div className="">
      <div className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Signup</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login and password!
                    </p>

                    <div className="form-outline text-start form-white mb-4">
                      <label className="form-label ">Name</label>
                      <input
                        type="text"
                        id="typeEmailX"
                        onChange={handelChange("username")}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline text-start form-white mb-4">
                      <label className="form-label ">Email</label>
                      <input
                        type="email"
                        id="typeEmailX"
                        onChange={handelChange("email")}
                        className="form-control form-control-lg"
                      />
                    </div>

                    <div className="form-outline text-start form-white mb-4">
                      <label className="form-label">Password</label>
                      <input
                        type="password"
                        id="typePasswordX"
                        onChange={handelChange("password")}
                        className="form-control form-control-lg"
                      />
                    </div>

                    {/* <p className="small mb-5 pb-lg-2">
                      <a className="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p> */}

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                      onClick={onSubmit}
                    >
                      Signup
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      {Msg}
                      <Link to="/signin" className="text-white-50 fw-bold">
                        Signin
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
