import React, { useEffect } from 'react';
import { Flex, Image, Stack, Box } from '@chakra-ui/core';

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Flex align="center" justify="center" flexDirection="column">
      {/* <Stack isInline> */}
      {/* <Image src="https://via.placeholder.com/250"></Image> */}
      <ins
        className="adsbygoogle adbanner-customize"
        style={{
          display: 'block',
          textAlign: 'center',
          minWidth: '250px'
        }}
        data-adtest="on"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-5766744601171066"
        data-ad-slot="7040455455"
      />
      {/* </Stack> */}
    </Flex>
  );
};

export default AdBanner;
