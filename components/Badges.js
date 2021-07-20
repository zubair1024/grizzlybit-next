import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Link,
  Heading,
  List,
  ListItem,
  Image,
  Box
} from '@chakra-ui/core';

const badges = [
  {
    url: 'https://www.credly.com/earner/earned/badge/887af430-e012-4d0e-9dec-9eaa6ac077cf',
    imageUrl: '/static/images/nodejs-application-development.png',
    title: 'Node.js Application Development'
  },
  {
    url: 'https://www.credly.com/badges/f019a853-fd3f-4f95-b9b8-2a7b350ae891',
    imageUrl: '/static/images/jslandia-icon.svg',
    title: 'OpenJS Foundation: JavaScriptLandia'
  },
  {
    url: 'https://mbrif.ae/razrlab-success-story/',
    imageUrl: '/static/images/mbrif-icon.png',
    title: 'MBRIF Accelerator Cohort Member',
    height: '4rem'
  }
];

const Badges = () => (
  <Box style={{ width: '100%' }}>
    <Heading as="h2">My Badges 🌟</Heading>
    <ul>
      <List>
        <Flex pt={5} align="center" flexWrap="wrap">
          {badges.map((badge, index) => {
            return (
              <ListItem p={5} key={index}>
                <Flex flexDirection="column" align="center" justify="center">
                  <Link target="_blank" href={badge.url}>
                    <Image
                      src={badge.imageUrl}
                      alt={badge.title}
                      height={badge.height ?? '6rem'}
                      loading="lazy"
                    />
                  </Link>
                </Flex>
              </ListItem>
            );
          })}
          {/* <ListItem>
            <a
              target="_blank"
              href="https://stackexchange.com/users/4666342/zubair1024"
            >
              <img
                src="https://stackexchange.com/users/flair/4666342.png"
                width="208"
                height="58"
                alt="profile for zubair1024 on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                title="profile for zubair1024 on Stack Exchange, a network of free, community-driven Q&amp;A sites"
                loading="lazy"
              />
            </a>
          </ListItem> */}
        </Flex>
      </List>
    </ul>
  </Box>
);

export default Badges;
