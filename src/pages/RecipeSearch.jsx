import { useState, useEffect } from 'react';
import { Center, Heading } from '@chakra-ui/react';
import { RecipeListPage } from './RecipeListPage';
import { TextInput } from '../components/ui/TextInput';

export const RecipeSearch = ({ clickFn }) => {
  const [searchField, setSearchField] = useState('');
  const [recipes, setRecipes] = useState([]); // State to store the fetched recipes

  useEffect(() => {
    fetch('http://localhost:3001/data')
    .then(response => response.json())
    .then(data => {
      setRecipes(data.hits); // Adjust based on your JSON structure
    })
    .catch(error => console.error('Error fetching data:', error));
  
  }, []);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = recipes.filter(hit =>
    hit.recipe.label.toLowerCase().includes(searchField.toLowerCase())
  );

  return (
    <>
      <Center display="flex" flexDir="column">
        <Heading size="lg" marginBottom="1rem">Search for recipes</Heading>
        <TextInput changeFn={handleChange} mb={8} />
        <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
      </Center>
    </>
  );
};

