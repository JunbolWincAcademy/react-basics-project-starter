import { useState, useEffect } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { RecipeListPage } from './RecipeListPage';
import { TextInput } from '../components/ui/TextInput';

export const RecipeSearch = ({ clickFn }) => {
  // the clickFn prop argument is sent by the App.jsx: <RecipeSearch clickFn={setUserRecipe} />
  // State for search input field
  const [searchField, setSearchField] = useState('');
  // State to store the fetched recipes
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetch recipes from the server when the component mounts
    // fetch('http://localhost:3000/data')
    fetch('https://json-server-react-restaurant-331e07840c42.herokuapp.com/data')
      .then((response) => response.json())
      .then((data) => {
        // Store the fetched recipes in state
        setRecipes(data.hits);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Update searchField state with user input
  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  // Filter recipes based on search input
  const matchedRecipes = recipes.filter((hit) => hit.recipe.label.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <>
      <Center display="flex" flexDir="column">
        <Heading size="lg" marginBottom="1rem">
          Search for recipes
        </Heading>
        <TextInput changeFn={handleChange} mb={8} />
        {/* Render a list of recipes that match the search input */}
        <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
      </Center>
    </>
  );
};

// just to test
