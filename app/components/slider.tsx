import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  // Pexels image URLs for travel/adventure themes
  const pexelsImages = [
    "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // Mountain landscape
    "https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // Beach sunset
    "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=1", // City exploration
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="slider w-full h-screen overflow-hidden -z-10">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {pexelsImages.map((imageUrl, index) => (
            <div key={index} className="slider-item h-screen w-full flex-shrink-0">
              <img
                src={imageUrl}
                alt={`Travel destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-20 md:translate-x-0 p-4 md:p-10 text-white rounded-3xl border backdrop-blur-xs flex flex-col gap-2 bg-black/60 w-[90%] md:w-auto max-w-xl">
        <h1 className="heading text-2xl md:text-4xl lg:text-5xl font-bold">Explore the world with exciting people</h1>
        <h2 className="subheading text-sm md:text-base lg:text-lg">
          We help people find co travellers and also structure their travel
          plans
        </h2>
        <Button
          variant={"ghost"}
          className="hover:bg-[var(--color-slime)] w-fit duration-500 cursor-pointer relative group overflow-hidden mt-2 md:mt-4"
        >
          <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
            Book a trip
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 md:w-6 md:h-6"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[var(--color-slime)] ease-in-out transition-all duration-500 group-hover:w-full -z-0"></span>
        </Button>
      </div>
    </div>
  );
}