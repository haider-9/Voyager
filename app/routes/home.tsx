import Header from "~/components/header";
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
    { title: "Voyager" },
    { name: "description", content: "Welcome to React Router!" },
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
