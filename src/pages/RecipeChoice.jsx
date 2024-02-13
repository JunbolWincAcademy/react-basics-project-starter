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

export const RecipeChoice = ({ recipe, clickFn }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Center flexDir={'column'} gap={4}>
      {/*because I am using <Center>, this replace the use of fragments*?/}
        <Heading>Your choice:{drink.name}</Heading> {/* Displaying the drink's name */}
      {/* Displaying the drink's image */}
      <img src={recipe.imgUrl} alt={recipe.alt} style={{ width: '100px', height: '100px' }} />
      {/* a bit explanation about how style works in jsx: the style attribute in JSX expects a javascript object.
            and because in JSX you need curly brackets to embed a javascript expression which all the style statement
            that is the reason of the {{...}}    */}
      {/* Additional paragraph */}
      <Text>Your {recipe.name} will be ready in a few minutes.</Text>
      <Flex mt={4}>
        <Button onClick={onOpen} mr={4}>
          {/*in order for this Button to work I needed ot add Button in import list from Chakra it wasn't there}*/}
          Confirm order
        </Button>
        <Button onClick={() => clickFn(null)} variant="ghost">
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
              <Button colorScheme="teal" mr={4}>
                Confirm
              </Button>
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </Center>
  );
};
