import type { Route } from "./+types/home";
import Slider from "~/components/slider";
import Tiltedmarquee from "~/components/tiltedmarquee";
import Services from "~/components/services";
import RentServices from "~/components/rentservices";
import TripsGrid from "~/components/tripsgrid";
import Testimonials from "~/components/testimonials";
import Ticket from "~/components/ticket";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager - Your Travel Companion" },
    {
      name: "description",
      content:
        "Discover amazing destinations, book your dream vacation, and experience unforgettable journeys with Voyager. We offer premium travel services, guided tours, and personalized trip planning.",
    },
    { name: "og:title", content: "Voyager - Your Travel Companion" },
    {
      name: "og:description",
      content:
        "Discover amazing destinations and book your dream vacation with Voyager",
    },
    { name: "og:image", content: "/images/voyager-logo.png" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: "/images/voyager-logo.png" },
    { name: "twitter:title", content: "Voyager - Your Travel Companion" },
    {
      name: "twitter:description",
      content:
        "Discover amazing destinations and book your dream vacation with Voyager",
    },
  ];
}
export default function Home() {
  return (
    <>
      <main>
        <Slider />
        <Tiltedmarquee />
        <Services />
        <RentServices />
        <TripsGrid />
        <Testimonials />
        <Ticket />
      </main>
    </>
  );
}
