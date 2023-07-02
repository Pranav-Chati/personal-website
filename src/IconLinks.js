import React from 'react';
import { ChakraProvider, Link, HStack } from '@chakra-ui/react';
import { GitHub, Linkedin} from 'react-feather';

function IconLinks() {
  return (
    <ChakraProvider>
      <HStack spacing={5}>
        <Link
            href="https://github.com/Pranav-Chati/"
            isExternal
        >
            <GitHub />
        </Link>
        <Link
            href="https://www.linkedin.com/in/PranavChati/"
            isExternal
        >
            <Linkedin />
        </Link>
      </HStack>
    </ChakraProvider>
  );
}

export default IconLinks;