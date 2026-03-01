import { useState } from "react";

import slide1 from "../assets/images/galleryimg4.png";
import slide2 from "../assets/images/galleryimg2.png";
import slide3 from "../assets/images/galleryimg.jpg";
import slide4 from "../assets/images/galleryimg3.png";
import slide5 from "../assets/images/galleryimage5.jpg";
import slide6 from "../assets/images/galleryimage6.png";
import slide7 from "../assets/images/galleryimage7.png";

const Carousel = () => {
  const images = [slide7, slide1, slide2, slide4, slide5, slide6, slide3];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-xl bg-pink-100 p-5 md:p-8">
      <div className="relative w-full h-[300px] md:h-[350px] lg:h-[380px] flex items-center justify-center pointer-events-none">
        {images.map((img, index) => {
          let offset = index - currentIndex;
          if (offset < -Math.floor(images.length / 2)) offset += images.length;
          if (offset > Math.floor(images.length / 2)) offset -= images.length;

          const isCenter = offset === 0;
          const scale = isCenter ? 1 : 0.7;
          const opacity = isCenter ? 1 : 0.4;
          const zIndex = isCenter ? 10 : 5;
          const blur = isCenter ? "0px" : "4px";

          return (
            <div
              key={index}
              className="absolute transition-all duration-500 ease-in-out"
              style={{
                transform: `translateX(${offset * 40}%) scale(${scale})`,
                zIndex,
                opacity,
                filter: `blur(${blur})`,
              }}
            >
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="rounded-lg object-cover w-[250px] h-[180px] md:w-[350px] md:h-[250px] lg:w-[400px] lg:h-[280px] pointer-events-none border border-black"
              />
            </div>
          );
        })}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full z-20"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-full z-20"
      >
        &gt;
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentIndex ? "bg-red-900 scale-110" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
