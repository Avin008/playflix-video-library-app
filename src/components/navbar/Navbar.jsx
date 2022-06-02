import "./navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useVideoContext } from "../../context/video-context";
import {
  DehazeIcon,
  SearchOutlinedIcon,
  AccountCircleIcon,
} from "../../icons/icons";
import { useState } from "react";

const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { videos, setVideos, searchFunc } = useVideoContext();

  const logoutFunc = () => {
    localStorage.removeItem("TOKEN");
    localStorage.removeItem("USER_INFO");

    setAuth({
      loginStatus: false,
      token: localStorage.getItem("TOKEN"),
      user: localStorage.getItem("USER_INFO"),
    });
  };

  return (
    <>
      <nav className="navbar">
        <div className="brand-container">
          <DehazeIcon className="navbar-icons" />
          <span className="brand-name">Browse</span>
        </div>
        <div className="search-bar-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            onChange={(e) => searchFunc(e.target.value)}
          />
          <button className="search-btn">
            <SearchOutlinedIcon className="navbar-icons" />
          </button>
        </div>
        <div className="navbar-actions">
          {!auth.loginStatus ? (
            <Link to="/login">
              <button className="login-btn">
                <AccountCircleIcon /> SIGN IN
              </button>
            </Link>
          ) : (
            <button className="login-btn" onClick={logoutFunc}>
              <AccountCircleIcon /> LOGOUT
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
