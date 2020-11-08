import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Image
} from '@chakra-ui/core';

import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import AdBanner from '../components/AdBanner';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as blogPosts } from './blog/**/*.mdx';
import { frontMatter as addressingBusinessWithIoT } from './blog/addressing-business-with-the-right-innovation-iot.mdx';
import { frontMatter as truthAboutBeingAFullStackDeveloper } from './blog/truth-about-being-a-full-stack-developer.mdx';
import { frontMatter as importanceOfTeachingChildrenToCode } from './blog/importance-of-teaching-children-to-code.mdx';

const url = 'https://grizzlybit.info/';
const title = 'Grizzlybit';
const description =
  "A coder's digest that is trying to be quirky, flawed and an enormous success.";

const Index = () => {
  const [searchValue, setSearchValue] = useState('');
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  const filteredBlogPosts = blogPosts
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .filter((frontMatter) =>
      frontMatter.title.toLowerCase().includes(searchValue.toLowerCase())
    );

  return (
    <>
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description
        }}
      />
      <Container>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
              <Flex align="center" justify="center">
                <Image
                  width={{ base: 250 }}
                  src={
                    colorMode === 'dark'
                      ? '/static/images/grizzlybit-light.png'
                      : '/static/images/grizzlybit-dark.png'
                  }
                  alt="Grizzlybit"
                />
              </Flex>
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              {`A coder's digest that is trying to be quirky, flawed and an enormous success.`}
            </Text>
            <InputGroup my={4} mr={4} w="100%">
              <Input
                aria-label="Search..."
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Search..."
              />
              <InputRightElement>
                <Icon name="search" color="gray.300" />
              </InputRightElement>
            </InputGroup>
          </Flex>
          {!searchValue && (
            <Flex
              flexDirection="column"
              justifyContent="flex-start"
              alignItems="flex-start"
              maxWidth="700px"
              mt={8}
            >
              <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
                📝 Noteworthy
              </Heading>
              <BlogPost {...addressingBusinessWithIoT} />
              <BlogPost {...truthAboutBeingAFullStackDeveloper} />
              <BlogPost {...importanceOfTeachingChildrenToCode} />
            </Flex>
          )}
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              💫 All Posts
            </Heading>
            {!filteredBlogPosts.length && 'No posts found.'}
            {filteredBlogPosts.map((frontMatter) => (
              <BlogPost key={frontMatter.title} {...frontMatter} />
            ))}
            <AdBanner />
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Index;
