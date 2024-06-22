
import { Input } from '@chakra-ui/react'

export const TextInput = ({ changeFn }) => {
  return (

    <Input 
    variant='filled'
    width="300px"
    placeholder='Type here'
    marginBottom={"2rem"} //only this is pushing the drinks <ul> down 
    onChange={changeFn}// if there any input activate the handleChange function
    />
    
  );
};