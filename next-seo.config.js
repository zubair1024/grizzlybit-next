const title = 'Grizzlybit';
const description = 'CTO, JavaScript developer, tech enthusiast.';

const SEO = {
  title,
  description,
  canonical: 'https://grizzlybit.dev',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://grizzlybit.dev',
    title,
    description,
    images: [
      {
        url: 'https://grizzlybit.dev/static/images/gb.jpg',
        alt: title,
        width: 1280,
        height: 720
      }
    ]
  },
  twitter: {
    handle: '@zubair1024',
    site: '@zubair1024',
    cardType: 'summary_large_image'
  }
};

export default SEO;
