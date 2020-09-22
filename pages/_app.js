import React, { useEffect } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode
} from '@chakra-ui/core';
import Router from 'next/router';
import Head from 'next/head';

import theme from '../styles/theme';
import { prismLightTheme, prismDarkTheme } from '../styles/prism';
import MDXComponents from '../components/MDXComponents';
import SEO from '../next-seo.config';
import { GTMPageView } from '../utils/gtm';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};

          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }

          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background: ${colorMode === 'light' ? 'white' : '#171923'};
          }
        `}
      />
      {children}
    </>
  );
};

// Router.events.on('routeChangeComplete', () => {
//   // do nothing
// });

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    // if (process.env.NODE_ENV === 'production') {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
    // }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="dark">
          <GlobalStyle>
            <Head>
              <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
              <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
              />
              <meta content="#ffffff" name="theme-color" />
              <meta content="#ffffff" name="msapplication-TileColor" />
              <meta
                content="/static/favicons/browserconfig.xml"
                name="msapplication-config"
              />
              {/* <meta content="" name="yandex-verification" />
              <meta
                content=""
                name="google-site-verification"
              /> */}
            </Head>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
