import React, { useEffect } from 'react';

const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    // <img src="https://via.placeholder.com/250"></img>
    <ins
      className="adsbygoogle adbanner-customize"
      style={{
        display: 'block',
        textAlign: 'center',
        width: '250px'
      }}
      data-adtest="on"
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-5766744601171066"
      data-ad-slot="7040455455"
    />
  );
};

export default AdBanner;
