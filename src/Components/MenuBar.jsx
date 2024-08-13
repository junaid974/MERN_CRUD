import React from "react";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <div>
      <div style={{padding:"20px"}}>
        <center>
          <label htmlFor="" style={{color:"Red" }}>
            <b>Developer Name: Mohamed Junaid Ahmed</b>
          </label>
          <label htmlFor="" style={{color:"Red",paddingLeft:"200px" }}>
            <b>Register Number: 23IT089</b>
          </label>
        </center>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid" style={{fontSize:"20px",backgroundColor:"#3293a8", color:"white"}}>
          <Link to={"/"} className="nav-link">
            <b>Recipes</b>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/create-recipe"} className="nav-link">
                  <b>Create Recipe</b>
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/recipe-list"} className="nav-link">
                  <b>Recipe List</b>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default MenuBar;
