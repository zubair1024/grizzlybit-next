import React, { useState, useEffect } from 'react';
import get from 'lodash/get';
import xml2json from 'xml2js';
import axios from 'axios';
import {
  Box,
  Image,
  Heading,
  Link,
  useColorMode,
  Spinner
} from '@chakra-ui/core';
import Truncate from 'react-truncate-html';

export default function NowReading() {
  const [currentlyReading, setCurrentlyReading] = useState({});
  const [isLoading, setLoadingState] = useState();

  useEffect(() => {
    setLoadingState(1);
    const config = { headers: { 'X-Requested-With': 'XMLHttpRequest' } };
    axios
      .get(
        'https://thingproxy.freeboard.io/fetch/https://www.goodreads.com/review/list?format=xml&id=36437878&key=L6LTc9oD2crL18OCaZUtQ&shelf=currently-reading&v=2',
        config
      )
      .then((response) => {
        let data;
        xml2json.parseString(response.data, function (err, result) {
          data = result;
        });
        setCurrentlyReading(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .then(() => {
        setLoadingState();
      });
  }, []);
  const book = {
    title: get(
      currentlyReading,
      `GoodreadsResponse.reviews[0].review[0].book[0].title[0]`
    ),
    description: get(
      currentlyReading,
      `GoodreadsResponse.reviews[0].review[0].book[0].description[0]`
    ),
    image: get(
      currentlyReading,
      `GoodreadsResponse.reviews[0].review[0].book[0].image_url[0]`
    ),
    link: get(
      currentlyReading,
      `GoodreadsResponse.reviews[0].review[0].book[0].link[0]`
    )
  };

  const { colorMode } = useColorMode();
  const descriptionColor = {
    dark: '#A0AEC0',
    light: '#2D3748'
  };
  1;

  return (
    <Box pt={5}>
      {isLoading && <Spinner />}
      {book.title && (
        <>
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight="bold">
            What I'm Reading 📚
          </Heading>
          <Box p={4} display={{ md: 'flex' }}>
            <Box flexShrink="0">
              <Image
                rounded="lg"
                width={{ md: 100 }}
                src={book.image}
                alt="Woman paying for a purchase"
              />
            </Box>
            <Box mt={{ base: 4, md: 0 }} ml={{ md: 5 }}>
              <Link
                target="_blank"
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="bold"
                href={book.link}
              >
                {book.title}
              </Link>
              <Truncate
                lines={5}
                dangerouslySetInnerHTML={{
                  __html: book.description
                }}
                style={{
                  color: descriptionColor[colorMode]
                }}
              />
              <Link
                mt={{ base: 1 }}
                target="_blank"
                display="block"
                fontSize="lg"
                lineHeight="normal"
                fontWeight="semibold"
                href={book.link}
              >
                Read More...
              </Link>
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
}
