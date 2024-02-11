import { useState } from 'react';
import { RecipeListPage } from './pages/RecipeListPage';

export const App = () => {

    //Create a new  selectedItem state
     const [suserRecipe, setUserRecipe] = useState(true); 
  
  // Your state code here
  return (
    <p>Please select a drink</p>
    <DrinkSearch clickFn={setUserRecipe} />
   
  )
    
};
