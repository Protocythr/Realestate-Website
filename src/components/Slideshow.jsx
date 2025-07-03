import { useEffect, useState } from "react";
import './Slideshow.css'

import slide1 from "/assets/slides/slide1.jpeg"
import slide2 from "/assets/slides/slide2.jpeg"
import slide3 from "/assets/slides/slide3.jpeg"
import slide4 from "/assets/slides/slide4.jpeg"
import slide5 from "/assets/slides/slide5.jpeg"
import slide6 from "/assets/slides/slide6.jpeg"
import slide7 from "/assets/slides/slide7.jpeg"
import slide8 from "/assets/slides/slide8.jpeg"
import slide9 from "/assets/slides/slide9.jpeg"

const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9]

export function Slideshow() {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex(prev => (prev + 1) % images.length);
      }, 4000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="slideshow">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i}`}
            className={`slide ${i === index ? "slide-transition" : ""}`}
          />
        ))}
      </div>
    );
} 