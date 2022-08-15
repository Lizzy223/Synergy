import React from 'react';
import {
  ChakraProvider,
  Box,
} from '@chakra-ui/react';
import Homepage from './component/Homepage';

function App() {
  return (
    <ChakraProvider >
      <Box >
        <Homepage/>
      </Box>
    </ChakraProvider>
  );
}

export default App;
