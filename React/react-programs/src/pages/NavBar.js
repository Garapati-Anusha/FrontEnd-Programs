import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <NavLink className="navbar-brand" exact to="/">
          React Programs
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item me-2">
              <NavLink className="nav-link" exact to="/crud">
                CRUD
              </NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink className="nav-link" exact to="/toDoApp">
                To Do App
              </NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink className="nav-link" exact to="/changeColor">
                Change Color
              </NavLink>
            </li>
            <li className="nav-item me-2">
              <NavLink className="nav-link" exact to="/customHook">
                Custom Hook
              </NavLink>
            </li>
          </ul>
        </div>

        
      </div>
    </nav>
  );
};

export default Navbar;