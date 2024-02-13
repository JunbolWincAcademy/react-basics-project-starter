import { useState } from 'react';
import { RecipeSearch } from './pages/RecipeSearch';
import { RecipeChoice } from './pages/RecipeChoice';
import { RecipeListPage } from './pages/RecipeListPage';
import { data } from './utils/data';
import './App.css';

import { Center, Heading, Flex, Text, Square, Circle, Button } from '@chakra-ui/react';

export const App = () => {
  const greeting = 'Bolivar Restaurant';
  //Create a new  selectedItem state
  const [userRecipe, setUserRecipe] = useState(null);

  return (
    <Center flexDir="column" bg="lightblue" textAlign="center" justifyContent="center" width="100%" height="auto" padding="50px">
      {userRecipe ? (
        <>
          <Heading size={'xl'} color={'black.200'} marginTop="4rem" marginBottom={'2rem'}>
            {greeting}
          </Heading>
          {/* // Only render DrinkChoice if a drink is selected */}
          <RecipeChoice recipe={userRecipe} clickFn={setUserRecipe} />

          <Button w="150px" marginBottom={'4rem'} onClick={() => setUserRecipe(null)}>
            Reset the choice
          </Button>
        </>
      ) : (
        // if not render the following:
        <>
          <Heading size={'2xl'} color={'black.200'} marginTop="2rem" marginBottom={'2rem'}>
            {greeting}
          </Heading>
          <RecipeSearch clickFn={setUserRecipe} />
        </>
      )}
    </Center>
  );
};
