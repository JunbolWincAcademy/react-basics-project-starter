import { Center, Flex, Image, Text, Box } from '@chakra-ui/react';

export const RecipeItem = ({ clickFn, recipe }) => {
  const cautionsString = recipe.recipe.cautions?.length > 0 ? recipe.recipe.cautions.join(', ') : '';
  // Checking in the object properties if cautions exist and are not empty, then join them into a string
  //for objects I need to use .length > 0 to verify their existence, if they do (?) separate them with a comma if they don't (:) return nothing
  //and that is done by: ({cautionsString && <Text>...</Text>}) will ensure that the "Cautions" text is not displayed when there are no cautions.
  //the && evaluates on its self or better say evaluate what is on the left if is true evaluate what is on right (short-circuit-evaluation)
  //the expression short-circuits (stops) rendering the variable because the code is running the empty string and that is
  //returning a Falsy (false) so cautionsString is Falsy, and the <Text> component is not rendered. React will ignore falsy values and React ignores
  //falsy values.

  // Filter the healthLabels for "Vegetarian" or "Vegan"
  const filteredLabelVegetarian = recipe.recipe.healthLabels.filter((label) => label === 'Vegetarian');
  const filteredLabelVegan = recipe.recipe.healthLabels.filter((label) => label === 'Vegan');

  return (
    <>
      <Center /*bg="blue"*/ width="260px" height="400" padding={2} cursor="pointer">
        <Box
          display="flex"
          flexDir="column"
          bg="white"
          borderRadius="10px 10px 10px 10px"
          width="220"
          height="400"
          // justifyContent="space-around"
          alignItems="center"
          textAlign="center"
          // objectFit="cover"
          onClick={() => clickFn(recipe)}
        >
          <Image borderRadius="10px 10px 0px 0px" width="250px" height="180px" src={recipe.recipe.image} mb="3"></Image>
          {/* <Spacer /> */}
          <Text fontWeight="700" marginBottom={3}>
            {recipe.recipe.label}
          </Text>
          <Text fontWeight="400">{recipe.recipe.dietLabels}</Text>
          {/* Conditionally render cautions only if they exist */}
          {cautionsString && (
            <Text fontWeight="400" color="red">
              Cautions: {cautionsString}
            </Text>
          )}
          <Text fontWeight="400">{recipe.recipe.mealType}</Text>
          <Text fontWeight="400">{recipe.recipe.dishType}</Text>
          <Flex width="100%" color="green" flexDir="row" textAlign="center" fontWeight="400" fontSize="sm" justifyContent="center" mt="2">
            <Text ml="2">{filteredLabelVegetarian}</Text>
            <Text ml="2">{filteredLabelVegan}</Text>
          </Flex>
        </Box>
      </Center>
    </>
  );
};
// note about what fixed the issue with pictures not having the same width. The reason I dont know but what fixed was the width in
// Center width="250px" if I dont use px it doesnt work. The wrapping doesnt take place.So having a fixed size with px was the solution
