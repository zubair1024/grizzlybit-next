import React from 'react';
import NextLink from 'next/link';
import { useColorMode, Link, ListItem } from '@chakra-ui/core';

const FigmaPost = (frontMatter) => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const slug = frontMatter.__resourcePath.replace('.mdx', '');

  return (
    <ListItem mb={2}>
      <NextLink href={slug} passHref>
        <Link color={secondaryTextColor[colorMode]}>{frontMatter.title}</Link>
      </NextLink>
    </ListItem>
  );
};

export default FigmaPost;
