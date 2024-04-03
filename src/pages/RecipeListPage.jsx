import { RecipeItem } from './RecipeItem';
import { Flex, List } from '@chakra-ui/react';

export const RecipeListPage = ({ clickFn, recipes }) => {
  // Receives clickFn and recipes as props. clickFn is a function to handle recipe selection,
  // and recipes is an array of recipe objects to display.

  // Iterate over the recipes array to create a list of RecipeItem components
  const recipeItems = recipes.map((item, index) => (
    <List styleType="none" key={index}>
      {' '}
      {/* Use List component from Chakra UI to display items without list-style bullets.  */}
      <RecipeItem clickFn={clickFn} recipe={item} />
      {/*Pass each recipe and the clickFn to the RecipeItem component*/}
    </List>
  ));

  return (
    // Flex container to layout the recipe items responsively
    <Flex gap={16} w={['full', '75%']} flexWrap="wrap" flexDir={{ base: 'column', sm: 'row' }} justify="center" alignItems="center">
      {recipeItems} {/* Render the list of RecipeItem components*/}
    </Flex>
  );
};
