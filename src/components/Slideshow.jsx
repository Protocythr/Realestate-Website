import { useEffect, useState } from "react";
import './Slideshow.css'

const images = [
    "/assets/slides/slide1.jpeg",
    "/assets/slides/slide2.jpeg",
    "/assets/slides/slide3.jpeg",
    "/assets/slides/slide4.jpeg",
    "/assets/slides/slide5.jpeg",
    "/assets/slides/slide6.jpeg",
    "/assets/slides/slide7.jpeg",
    "/assets/slides/slide8.jpeg",
    "/assets/slides/slide9.jpeg"
]

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