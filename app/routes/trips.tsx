import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import type { Route } from "../+types/root";

const countries = [
  {
    name: "Pakistan",
    image:
      "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/m5KwwnPbzVhyz87j/whatsapp-image-2024-10-29-at-15.46.59-1-YZ9Vx2RWq6skxvRW.jpeg",
    description: "Land of breathtaking landscapes and rich cultural heritage",
  },
  {
    name: "Turkey",
    image:
      "https://www.coxandkings.co.uk/-/media/cox-and-kings/images/tours/destinations/europe/turkey/classical-turkey/header-classical-turkey.jpg?w=1920&h=940",
    description: "Where East meets West with stunning architecture and history",
  },
  {
    name: "China",
    image:
      "https://www.state.gov/wp-content/uploads/2023/07/shutterstock_245773270v2.jpg",
    description:
      "Ancient civilization with modern marvels and diverse landscapes",
  },
  {
    name: "United States",
    image: "https://images.interhome.group/travelguide/usa-florida-miami.jpg",
    description:
      "From coast to coast, a land of opportunity and natural wonders",
  },
  {
    name: "France",
    image:
      "https://www.frenchclass.in/wp-content/uploads/2024/01/cities-in-france-paris-laforet.webp",
    description: "Romance, art, and culinary excellence in the heart of Europe",
  },
  {
    name: "Iran",
    image:
      "https://img.goodfon.com/original/1920x1080/2/4e/iran-iran-persia-beautiful.jpg",
    description:
      "Ancient Persian civilization with stunning Islamic architecture and rich cultural heritage",
  },
  {
    name: "Iraq",
    image:
      "https://images.unsplash.com/photo-1608925086961-dbcd276a0e71?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJhcXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Cradle of civilization with ancient Mesopotamian history and archaeological treasures",
  },
  {
    name: "Japan",
    image: "https://images.pexels.com/photos/3408354/pexels-photo-3408354.jpeg",
    description:
      "A perfect blend of tradition and modernity with unique culture and technology",
  },
  {
    name: "Italy",
    image: "https://images.pexels.com/photos/1797161/pexels-photo-1797161.jpeg",
    description:
      "Home to ancient ruins, artistic masterpieces, and world-renowned cuisine",
  },
  {
    name: "Egypt",
    image: "https://images.pexels.com/photos/3689859/pexels-photo-3689859.jpeg",
    description:
      "Land of pharaohs, pyramids, and the mighty Nile River civilization",
  },
  {
    name: "Spain",
    image: "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg",
    description: "Vibrant culture with flamenco, tapas, and historic architecture",
  },
  {
    name: "Greece",
    image: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg",
    description: "Birthplace of democracy and ancient philosophical wisdom",
  },
  {
    name: "Germany",
    image: "https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg",
    description: "Engineering excellence and fairytale castles in Central Europe",
  },
  {
    name: "Brazil",
    image: "https://images.pexels.com/photos/2868242/pexels-photo-2868242.jpeg",
    description: "Carnival spirit, Amazon rainforest, and beautiful beaches",
  },
  {
    name: "Australia",
    image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg",
    description: "Unique wildlife and stunning natural landscapes down under",
  },
  {
    name: "Russia",
    image: "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg",
    description: "Vast nation spanning two continents with rich cultural heritage",
  },
  {
    name: "India",
    image: "https://images.pexels.com/photos/1007426/pexels-photo-1007426.jpeg",
    description: "Ancient traditions and diverse cultures in South Asia",
  },
  {
    name: "Canada",
    image: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg",
    description: "Natural beauty from coast to coast with friendly people",
  },
  {
    name: "Mexico",
    image: "https://i.natgeofe.com/n/6c02ad5a-977b-4f12-b9c0-02ffb0736e07/metropolitan-cathedral-zocalo-mexico-city.JPG",
    description: "Rich history, ancient pyramids, and vibrant culture",
  },
  {
    name: "South Korea",
    image: "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg",
    description: "K-pop culture and technological innovation in East Asia",
  },
  {
    name: "Sweden",
    image: "https://images.pexels.com/photos/1538177/pexels-photo-1538177.jpeg",
    description: "Scandinavian design and northern lights experiences",
  },
  {
    name: "Norway",
    image: "https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg",
    description: "Stunning fjords and Viking heritage in Northern Europe",
  },
  {
    name: "Netherlands",
    image: "https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg",
    description: "Picturesque canals and cycling culture in the lowlands",
  },
  {
    name: "Switzerland",
    image: "https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg",
    description: "Alpine beauty and precision in the heart of Europe",
  },
  {
    name: "Portugal",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f9/3c/portugal.jpg?w=1400&h=1400&s=1",
    description: "Historic maritime nation with beautiful coastal cities",
  },
  {
    name: "Morocco",
    image: "https://images.pexels.com/photos/943510/pexels-photo-943510.jpeg",
    description: "Exotic medinas and Saharan adventures in North Africa",
  },
  {
    name: "Thailand",
    image: "https://kampatour.com/pic/news/7c6fc909-cc94-4be3-ab7e-f226cbedf523.jpg",
    description: "Tropical paradise with ancient temples and spicy cuisine",
  },
  {
    name: "Vietnam",
    image: "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
    description: "Rich history and stunning landscapes in Southeast Asia",
  },
  {
    name: "Argentina",
    image: "https://cdn.britannica.com/40/195440-050-B3859318/Congressional-Plaza-building-National-Congress-Buenos-Aires.jpg",
    description: "Tango, pampas, and Patagonian wilderness in South America",
  },
  {
    name: "New Zealand",
    image: "https://media.gq.com/photos/5ba1680236b2d004cdd843cd/16:9/w_2560%2Cc_limit/new-zealand-queenstown-travel-guide-gq.jpg",
    description: "Middle Earth landscapes and Maori culture in Oceania",
  }
];
const destinations = [
  {
    name: "Islamabad",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Faisal_Masjid_From_Damn_e_koh.jpg",
    description:
      "The capital city of Pakistan, known for its modern architecture and lush green areas.",
  },
  {
    name: "Wano",
    image:
      "https://i.pinimg.com/736x/5d/e2/91/5de2916bbecc35d24014164771a22b34.jpg",
    description:
      "A picturesque town in New World, surrounded by rugged mountains.",
  },
  {
    name: "Istanbul",
    image:
      "https://periodicadventures.com/wp-content/uploads/2023/12/Istanbul-Turkey-9-scaled.jpg",
    description:
      "A city straddling two continents, known for its rich history and stunning architecture.",
  },
  {
    name: "Beijing",
    image:
      "https://media.istockphoto.com/id/482334184/photo/night-on-beijing-central-business-district-buildings-skyline-china-cityscape.jpg?s=612x612&w=0&k=20&c=gd1nunX5dLfHTAyyqTE2frn4Iw-dzyr60YqJGaK2M4U=",
    description:
      "The capital of China, home to ancient wonders and modern marvels.",
  },
  {
    name: "New York",
    image:
      "https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg",
    description:
      "The city that never sleeps, known for its iconic skyline and diverse culture.",
  },
  {
    name: "Paris",
    image:
      "https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The City of Light, famous for its art, fashion, and romantic atmosphere.",
  },
  {
    name: "Tokyo",
    image: "https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg",
    description:
      "A dynamic metropolis blending ultramodern and traditional culture.",
  },
  {
    name: "Rome",
    image: "https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg",
    description:
      "The Eternal City, filled with ancient history and architectural marvels.",
  },
  {
    name: "Dubai",
    image: "https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg",
    description:
      "A futuristic city rising from the desert, known for luxury and innovation.",
  },
  {
    name: "Sydney",
    image: "https://images.pexels.com/photos/1878293/pexels-photo-1878293.jpeg",
    description:
      "Australia's largest city, famous for its harbor and iconic Opera House.",
  },
];
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager | Trips" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function Trip() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState("right");

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isAnimating) return;

    setDirection("right");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev === countries.length - 1 ? 0 : prev + 1));
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;

    setDirection("left");
    setIsAnimating(true);

    setTimeout(() => {
      setCurrentSlide((prev) => (prev === 0 ? countries.length - 1 : prev - 1));
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="flex flex-col">
      {/* Country Slider */}
      <div className="relative h-screen w-full overflow-hidden">
        {/* Current Slide */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            isAnimating
              ? direction === "right"
                ? "opacity-0 scale-95 -translate-x-full"
                : "opacity-0 scale-95 translate-x-full"
              : "opacity-100 scale-100 translate-x-0"
          }`}
        >
          <img
            src={countries[currentSlide].image}
            alt={countries[currentSlide].name}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Next Slide (for animation) */}
        <div
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            isAnimating
              ? "opacity-100 scale-100 translate-x-0"
              : direction === "right"
              ? "opacity-0 scale-95 translate-x-full"
              : "opacity-0 scale-95 -translate-x-full"
          }`}
        >
          <img
            src={countries[(currentSlide + 1) % countries.length].image}
            alt={countries[(currentSlide + 1) % countries.length].name}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Country Info */}
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full max-w-4xl px-4 transition-all duration-700 ${
            isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4 animate-fadeIn">
            {countries[currentSlide].name}
          </h1>
          <p className="text-xl mb-6 animate-slideUp">
            {countries[currentSlide].description}
          </p>
          <Link to={`destination/${countries[currentSlide].name}`}>
            <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 cursor-pointer animate-fadeIn">
              Explore Now
            </button>
          </Link>
        </div>

        {/* Navigation Buttons */}
        <div className="absolute bottom-10 right-10 flex text-black  space-x-4">
          <button
            onClick={prevSlide}
            className="bg-white bg-opacity-20 p-3 rounded-full cursor-pointer hover:bg-opacity-30 "
            disabled={isAnimating}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-white bg-opacity-20 p-3 rounded-full cursor-pointer hover:bg-opacity-30 "
            disabled={isAnimating}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute hidden md:block bottom-10 left-0 right-0">
          <div className="flex justify-center space-x-2">
            {countries.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return;
                  setDirection(index > currentSlide ? "right" : "left");
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentSlide(index);
                    setIsAnimating(false);
                  }, 500);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "w-8 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/70"
                }`}
                disabled={isAnimating}
              ></button>
            ))}
          </div>
        </div>
      </div>

      {/* Destinations Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group relative h-[400px]"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-2xl font-bold mb-2">{destination.name}</h3>
                <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {destination.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
