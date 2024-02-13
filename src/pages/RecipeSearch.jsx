import { useState } from 'react';
import { data } from '../utils/data';
import { Center, Heading, Flex, Text, Square, Circle } from '@chakra-ui/react';
import { RecipeListPage } from './RecipeListPage';
import { TextInput } from '../components/ui/TextInput';

export const RecipeSearch = ({ clickFn }) => {
  // console.log(data.hits[1].recipe.label);
  const [searchField, setSearchField] = useState(''); // Initialize with an empty string

  // Handle change event for the input field
  const handleChange = (event) => {
    //by default all eventhandlers or event objects will pass to the function'parameter the value of its user
    // in this case <input>'s value which is whatever the user types and save it as the word "event" which is just a placeholder
    // the same word will be use next to get its value:event.target.value
    setSearchField(event.target.value); // Update searchField state with the input value
  };

  // Filter the drinks based on the search input
  const matchedRecipes = data.hits.filter((hit) => {
    return hit.recipe.label.toLowerCase().startsWith(searchField.toLowerCase());
    //hre I had include before but it was wrong. The method
    //startsWith ensure that only select the drinks starting with letter type by the user
  });

  return (
    <>
      <Center bgColor="">
        <Flex flexDir="column" textAlign="center">
          <Heading fontSize="2rem" mb="100px">Search for recipes:</Heading>
          <TextInput bg="green" changeFn={handleChange} width="100px" height="50px" mb="100px" />
          <RecipeListPage clickFn={clickFn} recipes={matchedRecipes} />
        </Flex>
      </Center>
    </>
  );
};
