import React from 'react';
import NextLink from 'next/link';
import { parseISO, format } from 'date-fns';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Avatar,
  Box
} from '@chakra-ui/core';
import { DiscussionEmbed } from 'disqus-react';

import Container from '../components/Container';
import BlogSeo from '../components/BlogSeo';

export default function BlogLayout({ children, frontMatter }) {
  const slug = frontMatter.__resourcePath
    .replace('blog/', '')
    .replace('.mdx', '');
  const { colorMode } = useColorMode();
  const textColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <Container>
      <BlogSeo url={`https://grizzlybit.dev/blog/${slug}`} {...frontMatter} />
      <Stack
        as="article"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 4rem auto"
        maxWidth="700px"
        w="100%"
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
          w="100%"
        >
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            {frontMatter.title}
          </Heading>
          <Flex
            justify="space-between"
            align={['initial', 'center']}
            direction={['column', 'row']}
            mt={2}
            w="100%"
            mb={4}
          >
            <Flex align="center">
              <Avatar
                size="xs"
                name="Zubair Ahmed"
                src="/static/images/zubair-ahmed-square-sm.jpg"
                mr={2}
              />
              <Text fontSize="sm" color={textColor[colorMode]}>
                {frontMatter.by}
                {'Zubair Ahmed / '}
                {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
              </Text>
            </Flex>
            <Text fontSize="sm" color="gray.500" minWidth="100px" mt={[2, 0]}>
              {frontMatter.readingTime.text}
            </Text>
          </Flex>
        </Flex>
        {children}
        <Box w="100%" borderWidth="1px" padding="15px">
          <DiscussionEmbed
            shortname="grizzlybit-1"
            config={{
              url: `https://grizzlybit.dev/${frontMatter.__resourcePath}`,
              identifier: `https://grizzlybit.dev/${frontMatter.__resourcePath}`,
              title: frontMatter.title
            }}
          />
        </Box>
        <Box w="100%" d="flex" alignItems="center" justifyContent="center">
          <NextLink href="https://www.buymeacoffee.com/zubair1024">
            <img
              src="https://cdn.buymeacoffee.com/buttons/v2/default-orange.png"
              alt="Buy Me A Coffee"
              style={{
                height: '45px',
                width: '160px'
              }}
            />
          </NextLink>
        </Box>
      </Stack>
    </Container>
  );
}
