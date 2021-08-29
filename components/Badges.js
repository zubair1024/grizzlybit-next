import React from 'react';
import NextLink from 'next/link';
import {
  Flex,
  Link,
  Heading,
  List,
  ListItem,
  Image,
  Box,
  Tooltip
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
  },
  {
    url: 'https://www.transportandlogisticsme.com/smart-logistics/razr-lab-haifa-logistics-win-best-logistics-start-up-award',
    imageUrl: '/static/images/razrlab-best-logistics-start-up-award.png',
    title: 'Heroes of the Pandemic Award 2021',
    height: '6rem'
  },
  {
    url: 'https://github.com/zubair1024/google-mobile-sites-certification/blob/master/Google%20Partners%20-%20Mobile%20Sites%20Certification.pdf',
    imageUrl: '/static/images/google.png',
    title: 'Mobile Sites Certification',
    height: '4rem'
  },
  {
    url: 'https://www.freecodecamp.org/certification/zubair1024/apis-and-microservices',
    imageUrl: '/static/images/free-code-camp.png',
    title: 'APIs and Microservices Certification',
    height: '4rem'
  },
  {
    url: 'https://www.freecodecamp.org/certification/zubair1024/javascript-algorithms-and-data-structures',
    imageUrl: '/static/images/free-code-camp.png',
    title: 'JavaScript Algorithms and Data Structures Certification',
    height: '4rem'
  },
  {
    url: 'https://www.freecodecamp.org/certification/zubair1024/responsive-web-design',
    imageUrl: '/static/images/free-code-camp.png',
    title: 'Responsive Web Design Certification',
    height: '4rem'
  }
];

const Badges = () => (
  <Box style={{ width: '100%' }}>
    {/* <Heading as="h2">My Badges 🌟</Heading> */}
    <ul>
      <List>
        <Flex align="center" flexWrap="wrap">
          {badges.map((badge, index) => {
            return (
              <ListItem p={5} key={index}>
                <Flex flexDirection="column" align="center" justify="center">
                  <Tooltip label={badge.title} aria-label="A tooltip">
                    <Link target="_blank" href={badge.url}>
                      <Image
                        src={badge.imageUrl}
                        alt={badge.title}
                        height={badge.height ?? '6rem'}
                        loading="lazy"
                      />
                    </Link>
                  </Tooltip>
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
