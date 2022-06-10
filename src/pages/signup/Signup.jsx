import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/auth-context";

const Signup = () => {
  const [signupInfo, setSignupInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const signupUser = async () => {
    try {
      const response = await axios.post("/api/auth/signup", {
        firstName: signupInfo.firstName,
        lastName: signupInfo.lastName,
        email: signupInfo.email,
        password: signupInfo.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          firstName: response.data.createdUser.firstName,
          lastName: response.data.createdUser.lastName,
          email: response.data.createdUser.email,
        })
      );

      setAuth({
        loginStatus: true,
        token: localStorage.getItem("TOKEN"),
        user: JSON.parse(localStorage.getItem("USER_INFO")),
      });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-container form-container">
        <div className="saiyan-form-signup">
          <h1 className="heading">Signup</h1>

          <div className="input-group">
            <label className="label" htmlFor="firstname">
              First Name
            </label>
            <input
              className="input"
              type="text"
              placeholder="john"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  firstName: e.target.value,
                }))
              }
            />
            <label className="label" htmlFor="lastname">
              Last Name
            </label>
            <input
              className="input"
              type="text"
              placeholder="Doe"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  lastName: e.target.value,
                }))
              }
            />

            <label className="label" htmlFor="email">
              Email address
            </label>
            <input
              className="input"
              type="email"
              placeholder="john@gmail.com"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              placeholder="********"
              onChange={(e) =>
                setSignupInfo((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <div className="checkbox">
              <span>
                <input type="checkbox" name="" id="" />
                <label>I accepts all Terms & Conditions</label>
              </span>
            </div>

            <div className="actions">
              <button className="btn btn--primary" onClick={signupUser}>
                Create New Account
              </button>
              <Link className="btn btn--secondary" to="/login">
                Already have an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
