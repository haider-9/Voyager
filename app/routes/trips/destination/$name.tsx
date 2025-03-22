import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import {
  MapPin,
  Globe,
  Users,
  Languages,
  Coins,
  Flag,
  ArrowDown,
} from "lucide-react";
import { Input } from "~/components/ui/input";
import { Label } from "@radix-ui/react-label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { Button } from "~/components/ui/button";
import { Textarea } from "~/components/ui/textarea";
import type { Route } from "./+types/$name";

interface CountryData {
  name: {
    common: string;
    official: string;
  };
  capital: string[];
  region: string;
  subregion: string;
  population: number;
  languages: Record<string, string>;
  currencies: Record<string, { name: string; symbol: string }>;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  maps: {
    googleMaps: string;
  };
  borders?: string[];
}
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager | Destination Details" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
export default function DestinationDetails() {
  const { name } = useParams();
  const [country, setCountry] = useState<CountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );

        if (!response.ok) {
          throw new Error("Country not found");
        }

        const data = await response.json();
        setCountry(data[0]);
        setError(null);
      } catch (err) {
        setError("Failed to load destination details");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (name) {
      fetchCountryData();
    }
  }, [name]);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error || !country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <motion.h1
          className="text-2xl font-bold text-red-500 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {error || "Destination not found"}
        </motion.h1>
        <motion.p
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          We couldn't find information about this destination.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/trips"
            className="bg-[var(--color-slime)] text-black px-6 py-2 rounded-full font-semibold hover:shadow-[0_0_20px_var(--color-slime)] transition-shadow duration-300"
          >
            Explore other destinations
          </Link>
        </motion.div>
      </div>
    );
  }

  // Format population with commas
  const formattedPopulation = country.population.toLocaleString();

  // Get languages as an array
  const languagesList = country.languages
    ? Object.values(country.languages)
    : [];

  // Get currencies as an array
  const currenciesList = country.currencies
    ? Object.values(country.currencies).map((c) => `${c.name} (${c.symbol})`)
    : [];

  return (
    <div className="flex flex-col">
      {/* Hero section with country flag and name */}
      <section>
        <div className="w-full overflow-hidden shadow-lg h-screen relative">
          <img
            src={country.flags.svg}
            alt={country.flags.alt || `Flag of ${country.name.common}`}
            className="w-full h-full brightness-75 object-cover"
          />
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              {country.name.common}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-white max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {country.name.official}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="mt-6"
            >
              <a
                href={country.maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[var(--color-slime)] px-6 sm:px-8 py-3 sm:py-4 rounded-full text-black font-semibold text-sm sm:text-base shadow-[0_0_20px_var(--color-slime)] hover:shadow-[0_0_30px_var(--color-slime)] transition-shadow duration-300"
              >
                Explore Now
              </a>
            </motion.div>
          </motion.div>
          <motion.div
            className="rounded-full absolute right-5 sm:right-10 bottom-5 sm:bottom-10 size-12 sm:size-15 bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <ArrowDown className="animate-bounce text-white" />
          </motion.div>
        </div>
      </section>

      {/* About section */}
      <motion.div
        className="mx-2 sm:mx-10 py-8 sm:py-16 sm:w-[30rem]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading text-2xl sm:text-3xl">
          About {country.name.common}
        </h2>
        <p className="text-sm sm:text-base">
          Discover the beauty and culture of {country.name.common}. From its
          rich history to stunning landscapes, this destination offers
          unforgettable experiences for every traveler.
        </p>
      </motion.div>

      {/* Quick facts section */}
      <section>
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <motion.div
              className="flex-1 w-full bg-black/50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-[var(--color-slime)] mr-3" />
                <h3 className="text-xl font-semibold">Capital</h3>
              </div>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                {country.capital?.join(", ") || "N/A"}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mt-4"
              >
                <Link
                  to={`#capital-info`}
                  className="text-[var(--color-slime)] font-semibold"
                >
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 w-full bg-black/50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="flex items-center mb-4">
                <Globe className="w-8 h-8 text-[var(--color-slime)] mr-3" />
                <h3 className="text-xl font-semibold">Region</h3>
              </div>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                {country.region}{" "}
                {country.subregion ? `(${country.subregion})` : ""}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mt-4"
              >
                <Link
                  to={`#region-info`}
                  className="text-[var(--color-slime)] font-semibold"
                >
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 w-full bg-black/50 rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-[var(--color-slime)] mr-3" />
                <h3 className="text-xl font-semibold">Population</h3>
              </div>
              <p className="text-gray-600 mb-2 text-sm sm:text-base">
                {formattedPopulation}
              </p>
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="mt-4"
              >
                <Link
                  to={`#population-info`}
                  className="text-[var(--color-slime)] font-semibold"
                >
                  Learn More →
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Country details and map section */}
      <section>
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              className="flex-1 bg-black/50 rounded-lg shadow-lg p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-bold mb-6">Country Details</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Languages className="w-6 h-6 text-[var(--color-slime)] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Languages</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {languagesList.length > 0
                        ? languagesList.join(", ")
                        : "Information not available"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Coins className="w-6 h-6 text-[var(--color-slime)] mr-4 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Currencies</h3>
                    <p className="text-gray-700 text-sm sm:text-base">
                      {currenciesList.length > 0
                        ? currenciesList.join(", ")
                        : "Information not available"}
                    </p>
                  </div>
                </div>

                {country.borders && country.borders.length > 0 && (
                  <div className="flex items-start">
                    <Flag className="w-6 h-6 text-[var(--color-slime)] mr-4 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        Bordering Countries
                      </h3>
                      <p className="text-gray-700 text-sm sm:text-base">
                        {country.borders.join(", ")}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              className="flex-1 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <iframe
                src={`https://maps.google.com/maps?q=${country.name.common}&t=&z=5&ie=UTF8&iwloc=&output=embed`}
                className="w-full h-full min-h-[400px] border-0"
                allowFullScreen
                loading="lazy"
                title={`Map of ${country.name.common}`}
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Travel tips section */}
      <section>
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <motion.h2
            className="text-3xl font-bold mb-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Travel Tips for {country.name.common}
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src={`https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg
`}
                alt={`Landmark in ${country.name.common}`}
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex items-center flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">
                  Best Time to Visit
                </h3>
                <p className="text-gray-600 mb-2 text-center text-sm sm:text-base">
                  The best time to visit {country.name.common} depends on the
                  region and your preferred activities.
                </p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Research seasonal weather patterns before planning your trip.
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={"#"}
                    className="text-[var(--color-slime)] font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.img
                src={`https://images.pexels.com/photos/2108837/pexels-photo-2108837.jpeg
`}
                alt={`Culture in ${country.name.common}`}
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex items-center flex-col">
                <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">
                  Local Customs
                </h3>
                <p className="text-gray-600 mb-2 text-center text-sm sm:text-base">
                  Respect local customs and traditions when visiting{" "}
                  {country.name.common}.
                </p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base">
                  Learning a few phrases in{" "}
                  {languagesList[0] || "the local language"} can enhance your
                  experience.
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={"#"}
                    className="text-[var(--color-slime)] font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.img
                src={`https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg
`}
                alt={`Food in ${country.name.common}`}
                className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-lg"
              />
              <div className="flex flex-col items-center">
                <h3 className="text-xl sm:text-2xl font-bold mt-4 sm:mt-6 mb-3 sm:mb-4">
                  Cuisine
                </h3>
                <p className="text-gray-600 mb-2 text-sm sm:text-base text-center">
                  Explore the local cuisine of {country.name.common} for an
                  authentic cultural experience.
                </p>
                <p className="text-gray-600 mb-4 text-sm sm:text-base text-center">
                  Don't miss the opportunity to try traditional dishes and
                  specialties.
                </p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    to={"#"}
                    className="text-[var(--color-slime)] font-semibold"
                  >
                    Learn More →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Book your trip section */}
      <section>
        <div className="container mx-auto px-4 sm:px-8 py-8 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              className="flex flex-col items-center text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="heading text-2xl sm:text-3xl">
                Plan Your Trip to {country.name.common}
              </h2>
              <p className="text-sm sm:text-base">
                Ready to embark on your next adventure? Let us help you create
                the perfect itinerary for your visit to {country.name.common}.
              </p>
              <div className="flex items-center gap-4 mt-4">
                <motion.button className="bg-[var(--color-slime)] flex gap-2 items-center px-6 sm:px-8 cursor-pointer py-3 sm:py-4 rounded-full text-black font-semibold text-sm sm:text-base shadow-[0_0_20px_var(--color-slime)] hover:shadow-[0_0_30px_var(--color-slime)] transition-shadow duration-300">
                  Book Now
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6"
                    fill="true"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
            <motion.img
              src={`https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg
`}
              alt={`Travel in ${country.name.common}`}
              className="w-full lg:w-[40rem] h-64 sm:h-92 object-cover rounded-lg shadow-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 rounded-3xl my-8">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-[var(--color-slime)] to-emerald-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Book Your Trip
          </motion.h2>
          <motion.div
            className="max-w-2xl mx-auto backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-2xl border border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="firstName"
                    className="text-lg font-medium text-gray-200"
                  >
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    placeholder="Enter your first name"
                    className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="lastName"
                    className="text-lg font-medium text-gray-200"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    placeholder="Enter your last name"
                    className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="email"
                  className="text-lg font-medium text-gray-200"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label
                    htmlFor="startDate"
                    className="text-lg font-medium text-gray-200"
                  >
                    Start Date
                  </Label>
                  <Input
                    id="startDate"
                    type="date"
                    className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                  />
                </div>
                <div className="space-y-3">
                  <Label
                    htmlFor="endDate"
                    className="text-lg font-medium text-gray-200"
                  >
                    End Date
                  </Label>
                  <Input
                    id="endDate"
                    type="date"
                    className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="guests"
                  className="text-lg font-medium text-gray-200"
                >
                  Number of Guests
                </Label>
                <Select>
                  <SelectTrigger
                    id="guests"
                    className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg"
                  >
                    <SelectValue placeholder="Select number of guests" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#222] border-white/20">
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                    <SelectItem value="5">5+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label
                  htmlFor="message"
                  className="text-lg font-medium text-gray-200"
                >
                  Special Requests
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter any special requests or notes"
                  className="bg-white/10 border-white/20 focus:border-[var(--color-slime)] transition-all duration-300 rounded-lg min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--color-slime)] text-black text-lg font-bold py-6 rounded-xl hover:shadow-[0_0_30px_var(--color-slime)] hover:bg-[var(--color-slime)] transition-all duration-300"
              >
                Book Now
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
