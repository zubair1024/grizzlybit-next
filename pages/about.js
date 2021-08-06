import React, { useState } from 'react';
import { NextSeo } from 'next-seo';
import {
  useColorMode,
  Heading,
  Text,
  Flex,
  Stack,
  Box,
  Image,
  Spinner
} from '@chakra-ui/core';

import formatDistance from 'date-fns/formatDistance';

import Container from '../components/Container';
import { CustomLink } from '../components/MDXComponents';
import Timeline from '../components/Timeline';
import NowReading from '../components/NowReading';
import Badges from '../components/Badges';

const url = 'https://grizzlybit.dev/about';
const title = 'About Me – Zubair Ahmed';

const About = () => {
  const [profileImageLoading, setProfileImageLoading] = useState(1);
  const { colorMode } = useColorMode();
  const secondaryTextColor = {
    light: 'gray.700',
    dark: 'gray.400'
  };

  return (
    <>
      <NextSeo
        title={title}
        canonical={url}
        openGraph={{
          url,
          title
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
          <Box p={4} display={{ md: 'flex' }}>
            <Flex align="center" justify="center">
              {profileImageLoading && <Spinner />}
              <Image
                rounded="full"
                width={{ xs: 200, md: 200, lg: 200 }}
                src="/static/images/zubair-ahmed-square.jpg"
                alt="Zubair Ahmed"
                onLoad={() => setProfileImageLoading()}
              />
            </Flex>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
              <Heading mb={2} as="h1" size="2xl">
                👋 Hi, I'm Zubair
              </Heading>
              <Text color={secondaryTextColor[colorMode]} mb={4}>
                I'm a developer, an entrepreneur, an ambitious tweaker, author,
                traveller and over-scrutinizer 😝 . I work at{' '}
                <CustomLink href="https://razrlab.com">RAZRLAB</CustomLink> as
                the Chief Technology Officer for{' '}
                {formatDistance(new Date(2016, 0, 1), new Date())} now.
              </Text>
            </Box>
          </Box>
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              I love designing and developing beautiful and intuitive systems. A
              true juggler between VS Code and Figma. You can view some of my
              Figma designs <CustomLink href="/figma">here</CustomLink>.
            </Text>
            <Text color={secondaryTextColor[colorMode]} mb={4}>
              If you're interested in my development ideas, tech career and my
              personal life (I don't know why you would do that 😝), You can
              view my newsletters&nbsp;
              <CustomLink href="/newsletter">here</CustomLink>.
            </Text>
          </Flex>
          <Badges />
          <NowReading />
          <Timeline />
        </Stack>
      </Container>
    </>
  );
};

export default About;
