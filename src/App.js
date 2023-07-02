import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Heading,
  Container,
  Image,
  HStack,
  extendTheme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { GitHub } from 'react-feather';

const theme = extendTheme({
  fonts: {
    heading: `'Comfortaa', sans-serif`,
    body: `'Comfortaa', sans-serif`,
  },
})


function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl" >
        {/* All links will go here */}
        <Box id="header">
          <HStack>
            <Link
            colcolor="teal.500"
            href=""
            fontSize="3xl"
            >
              pranavchati
            </Link>
            <Link
            colcolor="teal.500"
            href="/resume"
            fontSize="2xl"
            rel="noreferrer"
            >
              resume
            </Link>
            <Link
              colcolor="teal.500"
              href="/projects"
              fontSize="2xl"
              rel="noreferrer"
              >
                projects
            </Link>
            <Link
              colcolor="teal.500"
              href="/contact_me"
              fontSize="2xl"
              rel="noreferrer"
              >
                contact me
            </Link>
          </HStack>
        </Box>

        {/* Textual Information Here */}
        <VStack spacing={4} id="main-body">
          <Image
            borderRadius='full'
            boxSize='250px'
            src='https://res.cloudinary.com/dvhcjpnix/image/upload/v1688141907/IMG_3214_kpk9az.jpg'
            alt='Pranav Chati'
          />
          <Heading fontSize='6xl'> Pranav Chati </Heading>
          <Text fontSize={"3xl"}>Student. Programmer. Entrepreneur.</Text>
          

          <Container fontSize='medium'> 
            I'm a rising junior at Ohio State University studying Computer Science, Business, and Sustainability. At OSU, I'm apart of two main clubs: Student Consultants for Non-Profit Organizations (SCNO) and Ai Club. I am also apart of the Integrated Business and Engineering program. Check out my github or linkedin to learn more about me.
          </Container>
          <GitHub />


        </VStack>
        {/* Footer */}
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
    </ChakraProvider>
  );
}

export default App;
