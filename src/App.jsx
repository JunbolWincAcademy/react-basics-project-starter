import { useState } from 'react';
import { RecipeSearch } from './pages/RecipeSearch'; // Import the RecipeSearch component for searching recipes
import { RecipeChoice } from './pages/RecipeChoice'; // Import the RecipeChoice component to display selected recipe details
import './App.css'; // Importing CSS for global styling

import { Center, Heading, Button } from '@chakra-ui/react'; // Importing Chakra UI components for layout and styling

export const App = () => {
  const greeting = 'Bolivar Restaurant'; // App heading text
  const [userRecipe, setUserRecipe] = useState(null); // State to keep track of the selected recipe

  return (
    <Center flexDir="column" bg="orange.100" textAlign="center" justifyContent="center" width="100%" height="auto" padding="50px">
      {userRecipe ? (
        // If a recipe is selected, display the RecipeChoice component
        <>
          <Heading size={'xl'} color={'red.600'} marginTop="4rem" marginBottom={'2rem'}>
            {greeting}
          </Heading>
          {/* RecipeChoice component displays the detailed view of the selected recipe */}
          <RecipeChoice recipe={userRecipe} clickFn={setUserRecipe} />

          {/* Button to clear the selected recipe and reset the view back to the landing page by setting userRecipe back to null */}
          <Button w="150px" marginBottom={'4rem'} onClick={() => setUserRecipe(null)}>
            Reset the choice
          </Button>
        </>
      ) : (
        // If no recipe is selected, display the greeting and RecipeSearch component
        <>
          <Heading size={'2xl'} color={'red.600'} marginTop="2rem" marginBottom={'2rem'}>
            {greeting}
          </Heading>
          <RecipeSearch clickFn={setUserRecipe} />
          {/*Using Prop Drilling: Pass setUserRecipe as clickFn prop to RecipeSearch. This allows RecipeSearch to set the selected recipe in the App component's state.*/}
        </>
      )}
    </Center>
  );
};

//---------------NOTES-------------------------
