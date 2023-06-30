import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Image,
  theme,
  HStack,
  //extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
      <ColorModeSwitcher justifySelf="flex-end" />
        <Box id="header">
          <HStack>
            <Link
            colcolor="teal.500"
            href=""
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
            >
              pranavchati
            </Link>
            <Link
            colcolor="teal.500"
            href="/about"
            fontSize="2xl"
            target="_blank"
            rel="noreferrer"
            >
              about
            </Link>
            <Link
            colcolor="teal.500"
            href="/about"
            fontSize="2xl"
            target="_blank"
            rel="noreferrer"
            >
              resume
            </Link>
            <Link
              colcolor="teal.500"
              href="/about"
              fontSize="2xl"
              target="_blank"
              rel="noreferrer"
              >
                projects
            </Link>
            <Link
              colcolor="teal.500"
              href="/about"
              fontSize="2xl"
              target="_blank"
              rel="noreferrer"
              >
                contact me
            </Link>
          </HStack>
        </Box>
        <VStack spacing={4} id="main-body">
          <Image
            borderRadius='full'
            boxSize='150px'
            src=''
            alt='Pranav Chati'
          />
          <Text fontSize='5xl'> Pranav Chati </Text>
          <Text fontSize={"medium"}>Student. Programmer. Entrepreneur.</Text>
          {/* Icons Here */}
        </VStack>

        {/* <Grid minH="100vh" p={3}>
          
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid> */}
      </Box>
    </ChakraProvider>
  );
}

export default App;
