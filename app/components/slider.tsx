import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

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
          <div className="slider-item h-screen w-full flex-shrink-0">
            <img
              src="https://dummyimage.com/1500/00000"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slider-item h-screen w-full flex-shrink-0">
            <img
              src="https://dummyimage.com/1400/00000"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="slider-item h-screen w-full flex-shrink-0">
            <img
              src="https://dummyimage.com/1600/00000"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-96 left-50 p-10 text-white rounded-3xl border backdrop-blur-xs flex flex-col  gap-2 bg-black/60">
        <h1 className="heading ">Explore the world with exciting people</h1>
        <h2 className="subheading">
          We help people find co travellers and also structure their travel
          plans
        </h2>
        <Button
          variant={"ghost"}
          className="hover:bg-[var(--color-slime)] w-fit duration-500 cursor-pointer relative group overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">
            Book a trip
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
          <span className="absolute left-0 top-0 h-full w-0 bg-[var(--color-slime)] ease-in-out transition-all duration-500 group-hover:w-full -z-0"></span>
        </Button>{" "}
      </div>
    </div>
  );
}
