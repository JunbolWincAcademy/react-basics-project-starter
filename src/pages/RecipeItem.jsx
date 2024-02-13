import { Center, Flex, Square, Circle, AbsoluteCenter, Image, Text, Spacer, Box, Button } from '@chakra-ui/react';

export const RecipeItem = ({ clickFn, recipe }) => {
  return (
    <>
      <Center bg="blue" width="250px" height="370" padding={2}>
        <Box
          bg="white"
          borderRadius="10px 10px 10px 10px"
          width="170"
          height="350"
          textAlign="center"
          objectFit="cover"
          onClick={() => clickFn(recipe)}
        >
          <Image borderRadius="10px 10px 0px 0px" width="250px" height="150px" src={recipe.recipe.image} objectFit="cover" mb="3"></Image>
          {/* <Spacer /> */}
          <Text fontWeight="700">{recipe.recipe.label}</Text>
        </Box>
      </Center>
    </>
  );
};
// note about what fixed the issue with pictures not having the same width. The reason I dont know but what fixed was the width in
// Center width="250px" if I dont use px it doesnt work. The wrapping doesnt take place.So having a fixed size with px was the solution
