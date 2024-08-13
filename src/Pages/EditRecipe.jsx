import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditRecipe() {
  const [userForm, setUserForm] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    category: "",
  });
  let params = useParams();
  let navigate = useNavigate();
  const inputsHandler = (e) => {
    setUserForm((prevNext) => ({
      ...prevNext,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:4000/recipe/update-recipe/" + params.id, {
        title: userForm.title,
        ingredients: userForm.ingredients,
        instructions: userForm.instructions,
        category: userForm.category,
      })
      .then((res) => {
        console.log({ status: res.status });
        navigate("/recipe-list");
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:4000/recipe/get-recipe/" + params.id)
      .then((res) => {
        setUserForm({
          title: res.data.data.title,
          ingredients: res.data.data.ingredients,
          instructions: res.data.data.instructions,
          category: res.data.data.category,
        });
      });
  }, []);
  return (
    <div>
      <div>
        <center>
          <label htmlFor="">
            <h3 style={{ color: "#1b02fa" }}>Edit Recipe</h3>
          </label>
        </center>
      </div>
      <div className="form-wrapper">
        <form onSubmit={onUpdate}>
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
              Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditRecipe;
