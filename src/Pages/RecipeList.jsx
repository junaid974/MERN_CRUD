import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RecipeList() {
  const [userForm, setUserForm] = useState([]);
  const deleteRecipe = (_id) => {
    console.log(_id);
    axios
      .delete("http://localhost:4000/recipe/delete-recipe/" + _id)
      .then(() => {
        console.log("Data successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/recipe/")
      .then((res) => {
        setUserForm(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userForm]);
  return (
    <div>
      <div>
        <center>
          <label htmlFor="">
            <h3 style={{ color: "#1b02fa" }}>Recipe List</h3>
          </label>
        </center>
      </div>
      <div className="container" style={{ display: "flex" }}>
        {userForm.map((user, index) => {
          return (
            <div
              className="card text-bg-light mb-3"
              style={{ width: "18rem", margin: "10px" }}
            >
              <div className="card-header">
                <h5>{user.title}</h5>
              </div>
              <div className="card-body">
                <h6 className="card-title">Ingredients:</h6>
                <ul>
                  <li>{user.ingredients.slice(0, 7)},</li>
                  <li>{user.ingredients.slice(8, 12)},</li>
                  <li>{user.ingredients.slice(13, 18)},</li>
                  <li>{user.ingredients.slice(19, 24)},</li>
                  <li>{user.ingredients.slice(25, 31)},</li>
                </ul>
                <div
                  className="btn-group btn-group-sm"
                  role="group"
                  aria-label="Small button group"
                >
                  <div style={{ paddingRight: "50px" }}>
                    <pre className="card-text">
                      <b>Category:</b>
                    </pre>
                    <pre className="card-text">{user.category}</pre>
                  </div>
                  <Link
                    className="btn btn-outline-primary btn-sm me-2"
                    to={"/edit-recipe/" + user._id}
                  >
                    <i class="bi bi-pencil-square"> Edit</i>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-primary"
                    onClick={() => deleteRecipe(user._id)}
                  >
                    <i className="bi bi-trash-fill"> Delete</i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default RecipeList;
