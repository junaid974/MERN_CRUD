import React from 'react'
import "./App.css";
import { Routes,Route } from 'react-router-dom';
import CreateRecipe from './Pages/CreateRecipe';
import RecipeList from './Pages/RecipeList';
import Home from './Pages/Home';
import MenuBar from './Components/MenuBar';
import EditRecipe from './Pages/EditRecipe';

function App() {
  return (
    <div>
      <MenuBar/>
      <div className="container mt-5">
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-recipe" element={<CreateRecipe />} />
            <Route path="/edit-recipe/:id" element={<EditRecipe />} />
            <Route path="/recipe-list" element={<RecipeList />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App