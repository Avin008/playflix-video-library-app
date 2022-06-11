import "./login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { toast } from "react-toastify";

const Login = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });

  const loginFunc = async () => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: loginInfo.email,
        password: loginInfo.password,
      });

      localStorage.setItem("TOKEN", response.data.encodedToken);
      localStorage.setItem(
        "USER_INFO",
        JSON.stringify({
          firstName: response.data.foundUser.firstName,
          lastName: response.data.foundUser.lastName,
          email: response.data.foundUser.email,
        })
      );

      setAuth({
        loginStatus: true,
        token: localStorage.getItem("TOKEN"),
        user: JSON.parse(localStorage.getItem("USER_INFO")),
      });

      navigate("/");
      toast.success("user successfully logged in");
    } catch (error) {
      toast.error(error.response.data.errors[0]);
    }
  };

  const loginUser = (e) => {
    e.preventDefault();
    loginFunc();
  };

  const guestLogin = async () => {
    setLoginInfo({
      email: "johndoe@gmail.com",
      password: "johndoe@123",
    });
    loginFunc();
  };

  return (
    <>
      <div className="container login-container">
        <form onSubmit={loginUser}>
          <div className="saiyan-form">
            <h1 className="form__heading">Login</h1>

            <div className="input-group">
              <label className="label" htmlFor="email">
                Email adresses
              </label>
              <input
                className="input"
                type="email"
                name="email"
                placeholder="john@gmail.com"
                required
                onChange={(e) =>
                  setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
                }
                value={loginInfo.email}
              />
              <label className="label" htmlFor="password">
                Password
              </label>
              <input
                className="input"
                type="password"
                name="password"
                placeholder="********"
                required
                onChange={(e) =>
                  setLoginInfo((prev) => ({
                    ...prev,
                    password: e.target.value,
                  }))
                }
                value={loginInfo.password}
              />
              <div className="checkbox">
                <span>
                  <input type="checkbox" name="checkbox" />
                  <label htmlFor="checkbox">Remember me</label>
                </span>

                <Link className="forgot-password-btn" to={"#"}>
                  Forgot Password?
                </Link>
              </div>

              <div className="actions">
                <button type="sumbit" className="btn btn--primary">
                  Login
                </button>
                <button className="btn btn--secondary" onClick={guestLogin}>
                  Login As Guest
                </button>
                <Link className="btn btn" to="/signup">
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
