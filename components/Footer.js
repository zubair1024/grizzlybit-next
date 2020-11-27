import React from 'react';
import NextLink from 'next/link';
import { Flex, Link, IconButton } from '@chakra-ui/core';
import { FaMedium } from 'react-icons/fa';

const Footer = () => (
  <Flex align="center" mb={4} direction="column">
    <div>
      <Link href="https://twitter.com/zubair1024" title="Twitter" isExternal>
        <IconButton
          aria-label="Twitter"
          icon="twitter"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://github.com/zubair1024" title="GitHub" isExternal>
        <IconButton
          aria-label="GitHub"
          icon="github"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/zubair1024"
        title="LinkedIn"
        isExternal
      >
        <IconButton
          aria-label="LinkedIn"
          icon="linkedin"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="https://grizzlybit.medium.com/" title="Medium" isExternal>
        <IconButton
          aria-label="medium"
          icon={FaMedium}
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
      <Link href="mailto:zubair1024@gmail.com" title="Email" isExternal>
        <IconButton
          aria-label="Email"
          icon="mail"
          size="lg"
          color="gray.500"
          variant="ghost"
        />
      </Link>
    </div>
    <div>
      <NextLink href="/uses" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Uses"
        >
          /uses
        </Link>
      </NextLink>
      <NextLink href="/newsletter" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Newsletter"
        >
          /newsletter
        </Link>
      </NextLink>
      <NextLink href="/figma" passHref>
        <Link
          fontSize="sm"
          color="gray.500"
          minWidth="100px"
          mr={2}
          title="Figma"
        >
          /figma
        </Link>
      </NextLink>
    </div>
  </Flex>
);

export default Footer;
