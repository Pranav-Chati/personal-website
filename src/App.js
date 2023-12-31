import React from 'react';
import {
  Box,
  ChakraProvider,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Spacer,
  Text,
  theme,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import IconLinks from './IconLinks';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center">
        {/* All links will go here */}
        <Flex fontSize="3xl" paddingBottom={8}>
          <Link marginLeft={10}>pranavchati</Link>
          <Spacer />
          <HStack alignContent={'center'}>
            <Link
              href="../public/ChatiPranavResume.pdf"
              download={true}
              marginRight={5}
            >
              resume
            </Link>
            <Link href="mailto:chati.2@osu.edu"> contact me </Link>
            <ColorModeSwitcher />
          </HStack>
        </Flex>

        {/* Textual Information Here */}
        <VStack spacing={4}>
          <Image
            borderRadius="full"
            boxSize="250px"
            src="https://res.cloudinary.com/dvhcjpnix/image/upload/v1688141907/IMG_3214_kpk9az.jpg"
            alt="Pranav Chati"
          />
          <Heading fontSize="6xl"> Pranav Chati </Heading>
          <Text fontSize={'3xl'}>Student. Programmer. Entrepreneur.</Text>

          <Container fontSize="large">
            I'm a rising junior at Ohio State University studying Computer
            Science, Business, and Sustainability. At OSU, I'm apart of two main
            clubs: Student Consultants for Non-Profit Organizations (SCNO) and
            Ai Club. I am also apart of the Integrated Business and Engineering
            program. Check out my github or linkedin to learn more about me.
          </Container>

          <IconLinks />
        </VStack>
      </Box>
    </ChakraProvider>
  );
}

export default App;
