import React from 'react';
import { Link, HStack } from '@chakra-ui/react';
import { GitHub, Linkedin } from 'react-feather';

function IconLinks() {
  return (
    <HStack spacing={5}>
      <Link href="https://github.com/Pranav-Chati/" isExternal>
        <GitHub />
      </Link>
      <Link href="https://www.linkedin.com/in/PranavChati/" isExternal>
        <Linkedin />
      </Link>
    </HStack>
  );
}

export default IconLinks;
