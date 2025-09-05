
import React from 'react';
import "./Banner.css";
import bannerImage from '../../Imagens/Banner.png';

export default function Banner() {
  return (
    <section 
      className="banner" 
      style={{
        backgroundImage: `url(${bannerImage})`
      }}
    >
    </section>
  );
}