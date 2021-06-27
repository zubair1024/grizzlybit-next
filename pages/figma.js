import React from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  List
} from '@chakra-ui/core';

import Container from '../components/Container';
import Subscribe from '../components/Subscribe';
import FigmaPost from '../components/FigmaPost';

// eslint-disable-next-line import/no-unresolved, import/extensions
import { frontMatter as figmaDesigns } from './figma/**/*.mdx';

const url = 'https://grizzlybit.dev/figma';
const title = 'Figma Designs – Grizzlybit';
const description = 'Thoughts on software, programming, tech, and my madness.';

const Figma = () => {
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

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
              🎨 Figma Designs
            </Heading>
            <Text color={secondaryTextColor[colorMode]}>
              Here are some of my Figma designs. Don't be too judgemental there
              "Mr./Miss Judgy Pants"...
            </Text>
          </Flex>
          <Subscribe />
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
            mt={8}
          >
            <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
              👀 Designs
            </Heading>
            <List styleType="disc">
              {figmaDesigns
                .sort(
                  (a, b) =>
                    Number(new Date(b.publishedAt)) -
                    Number(new Date(a.publishedAt))
                )
                .map((frontMatter) => {
                  return <FigmaPost key={frontMatter.title} {...frontMatter} />;
                })}
            </List>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Figma;
