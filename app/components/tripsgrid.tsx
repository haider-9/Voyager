import { Button } from "./ui/button";

const TripsGrid = () => {
  return (
    <div className="space-y-6 p-4">
      <h2 className="heading text-center">Completed Journeys</h2>

      <div className="space-y-5">
        <div className="grid grid-cols-3 gap-5">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1486222/pexels-photo-1486222.jpeg"
              alt="Kyoto"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-64 filter grayscale transition-all duration-500 ease-in-out transform group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
              Kyoto
            </div>
          </div>

          <div className="relative col-span-2 group overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/2193300/pexels-photo-2193300.jpeg"
              alt="Santorini"
              width={800}
              height={300}
              className="rounded-lg object-cover w-full h-64 filter grayscale transition-all duration-500 ease-in-out transform group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
              Santorini
            </div>
          </div>
        </div>

        {/* Second row - 3 images */}
        <div className="grid grid-cols-3 gap-5">
          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg"
              alt="Bali"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-56 filter grayscale transition-all duration-500 ease-in-out transform group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
              Bali
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg"
              alt="Machu Picchu"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-56 filter grayscale transition-all duration-500 ease-in-out transform group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
              Machu Picchu
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-lg">
            <img
              src="https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg"
              alt="Serengeti"
              width={400}
              height={300}
              className="rounded-lg object-cover w-full h-56 filter grayscale transition-all duration-500 ease-in-out transform group-hover:grayscale-0 group-hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 text-white font-semibold text-xl drop-shadow-lg">
              Serengeti
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <Button className="rounded-full bg-[var(--color-slime)] w-44 cursor-pointer hover:bg-[var(--color-slime)]/50 transition-all duration-300 py-6 text-base font-medium">
          Book a trip
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default TripsGrid;
