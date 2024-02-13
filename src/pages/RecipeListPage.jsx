import { data } from '../utils/data';
import { RecipeItem } from './RecipeItem';
import { Center, Heading, Flex, List, Text, } from '@chakra-ui/react';

export const RecipeListPage = ({ clickFn, recipes}) => {
  // You can play around with the console log, but ultimately remove it once you are done

  const recipeItems = recipes.map((item,index) => (
      <List styleType="none" key={index}>
        {/*in order to get rid off the bullets I had to use the List comp from Chakra and give it that style */}
        <RecipeItem clickFn={clickFn} recipe={item} />
      </List>
    )
  );

  return (
    <Flex gap={16} w={['full', '75%']} flexWrap="wrap" flexDir={{ base: 'column', sm: 'row' }} justify="center" alignItems="center">   
        {recipeItems}
    </Flex>
  );
};
