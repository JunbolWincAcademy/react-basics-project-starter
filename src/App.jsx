import { useState } from 'react';
import { RecipeSearch } from './pages/RecipeSearch';
import { RecipeChoice } from './pages/RecipeChoice';
import { RecipeListPage } from './pages/RecipeListPage';
import { data } from './utils/data';

import { Center, Heading, Flex, Text, Square, Circle } from '@chakra-ui/react';

export const App = () => {
  const greeting = 'Bolivar Restaurant';
  //Create a new  selectedItem state
  const [userRecipe, setUserRecipe] = useState(null);

  return (
    <div className="App">
      {userRecipe ? (
        <>
        <Center backgroundColor={blue}>
        <Heading size={'xl'} color={'black.200'} marginBottom={'2rem'}>
            {greeting}
          </Heading>
          {/* // Only render DrinkChoice if a drink is selected */}
          <RecipeChoice recipe={userRecipe} clickFn={setUserRecipe} />

          <button className="button" onClick={() => setUserRecipe(null)}>
            Reset the choice
          </button>




        </Center>
        
        </>
      ) : (
        // if not render the following:
        <>
        <Center display="flex" flexDir="column"backgroundColor="lightblue" >
        <Heading size={'2xl'} color={'black.200'} marginBottom={'2rem'} mb="50px">
            {greeting}
          </Heading>
       
          <RecipeSearch clickFn={setUserRecipe} />


        </Center>
         
        </>
      )}
    </div>
  );
};
