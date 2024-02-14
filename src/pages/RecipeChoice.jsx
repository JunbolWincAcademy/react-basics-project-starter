import {
  Center,
  Flex,
  Heading,
  Button, //this was missing
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';

//  import { Button } from './ui/Button';

export const RecipeChoice = ({ clickFn, recipe }) => {
  // Check if cautions exist and are not empty, then join them into a string
  const cautionsString = recipe.recipe.cautions?.length > 0 ? recipe.recipe.cautions.join(', ') : '';
  // here I am using a Optional Chaining (?.) so on the left I evaluate this condition: length > o and if that is true
  // show the strings separated by commas join(',') IF NOT (:) return and empty string which caused cautionsString to be Falsy
  // and the variable wont render because React ignore Falsy variables

  // Check if healthLabelsexist and are not empty, then join them into a string
  const healthLabelsString = recipe.recipe.healthLabels?.length > 0 ? recipe.recipe.healthLabels.join(', ') : '';

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center flexDir="column" gap={4} mb="2rem">
      <Flex bgColor="white" flexDir="column" borderRadius="10px" width="500px" height="90%px" alignItems="center">
        {/*because I am using <Center>, this replace the use of fragments*?/}
        <Heading>Your choice:{drink.name}</Heading> {/* Displaying the drink's name */}
        {/* Displaying the drink's image */}
        <Image borderRadius="10px 10px 0px 0px" width="500px" height="300px" src={recipe.recipe.image} mb="3"></Image>
        {/* a bit explanation about how style works in jsx: the style attribute in JSX expects a javascript object.
            and because in JSX you need curly brackets to embed a javascript expression which all the style statement
            that is the reason of the {{...}}    */}
        {/* Additional paragraph */}

        <Text>
          Your <Text fontWeight="700">{recipe.recipe.label}</Text> will be ready in a few minutes.
        </Text>
        <Text fontWeight="400" mt="3">
          {recipe.recipe.dietLabels}
        </Text>
        {/* Conditionally render cautions only if they exist */}
        {cautionsString && (
          <Text fontWeight="400" color="red">
            Cautions: {cautionsString}
          </Text>
        )}
        <Text fontWeight="400">{recipe.recipe.mealType}</Text>
        <Text fontWeight="400">{recipe.recipe.dishType}</Text>

        {healthLabelsString && (
          <Flex flexDir="column" width="90%">
            <Text fontWeight="600" mt="3">
              Health Labels:
            </Text>
            <Text fontWeight="400">{healthLabelsString}</Text>
          </Flex>
        )}
        <Text fontWeight="600" mt="2">
          Ingredients:
        </Text>
        <Text fontWeight="400" textAlign="left" width="200px">
          {recipe.recipe.ingredientLines}
        </Text>

        <Flex direction="column" mt="3">
          <Text fontWeight="400">Total Nutrients:</Text>
          <Text fontWeight="400">
            kcal: {recipe.recipe.totalNutrients.ENERC_KCAL.quantity} {recipe.recipe.totalNutrients.ENERC_KCAL.unit}
          </Text>
          <Text fontWeight="400">
            Protein: {recipe.recipe.totalNutrients.PROCNT.quantity} {recipe.recipe.totalNutrients.PROCNT.unit}
          </Text>
          <Text fontWeight="400">
            Fat: {recipe.recipe.totalNutrients.FAT.quantity} {recipe.recipe.totalNutrients.FAT.unit}
          </Text>
          <Text fontWeight="400">
            Carbs: {recipe.recipe.totalNutrients.CHOCDF.quantity} {recipe.recipe.totalNutrients.CHOCDF.unit}
          </Text>
          <Text fontWeight="400">
            Cholesterol: {recipe.recipe.totalNutrients.CHOLE.quantity} {recipe.recipe.totalNutrients.CHOLE.unit}
          </Text>
          <Text fontWeight="400">
            Sodium: {recipe.recipe.totalNutrients.NA.quantity} {recipe.recipe.totalNutrients.NA.unit}
          </Text>
        </Flex>

        <Text fontWeight="400" mt="3">
          Total Cooking Time:{recipe.recipe.totalTime}min
        </Text>
        <Flex margin={5}>
          <Button colorScheme="red" onClick={onOpen} mr={4}>
            {/*in order for this Button to work I needed ot add Button in import list from Chakra it wasn't there}*/}
            Confirm order
          </Button>
          <Button onClick={() => clickFn(null)}>
            {/*//adding clickFn={null} here fixed the issue, 
            basically I pass it to this child component DrinkChoice form App I can use it here:  <Button onClick={() => clickFn(null)} variant="ghost">
            by given null to clickFn in there I reset the choice in here the Modal*/}
            Change selection
          </Button>
        </Flex>
        <Flex flexDirection={{ base: 'column', sm: 'row' }}>
          <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'full', sm: 'md' }}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Confirm your order</ModalHeader>
              <ModalCloseButton />
              <ModalBody
                display="flex"
                height={{ base: 'full', sm: 'fit-content' }}
                flexDir="column"
                alignItems={{ base: 'center', sm: 'flex-start' }}
                justifyContent="center"
                textAlign={{ base: 'center', sm: 'left' }}
              >
                <Text>1x {recipe.name}</Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="red" mr={4}>
                  Confirm
                </Button>
                <Button variant="ghost" onClick={onClose}>
                  Cancel
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </Flex>
    </Center>
  );
};
