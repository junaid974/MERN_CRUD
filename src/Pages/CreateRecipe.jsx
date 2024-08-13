import React, { useState } from "react";
import axios from "axios";

function CreateRecipe() {
  const [userForm, setUserForm] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
  });
  const inputsHandler = (e) => {
    setUserForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/recipe/create-recipe", userForm)
      .then((res) => {
        console.log(res.data);
        setUserForm({
          title: "",
          ingredients: "",
          instructions: "",
          category: "",
        });
      });
  };
  return (
    <div>
      <div>
        <center>
          <label htmlFor="">
            <h3 style={{ color: "#1b02fa" }}>Add Recipe</h3>
          </label>
        </center>
      </div>
      <div className="form-wrapper">
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#1b02fa" }}>
              Title
            </label>
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              value={userForm.title}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#1b02fa" }}>
              Ingredients
            </label>
            <textarea
              className="form-control"
              name="ingredients"
              id="ingredients"
              rows={5}
              value={userForm.ingredients}
              onChange={inputsHandler}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#1b02fa" }}>
              Instructions
            </label>
            <textarea
              className="form-control"
              name="instructions"
              id="instructions"
              rows={10}
              value={userForm.instructions}
              onChange={inputsHandler}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "#1b02fa" }}>
              Category
            </label>
            <input
              type="text"
              className="form-control"
              name="category"
              id="category"
              value={userForm.category}
              onChange={inputsHandler}
            />
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-primary">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateRecipe;
