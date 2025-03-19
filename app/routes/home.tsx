import Header from "~/components/header";
import type { Route } from "./+types/home";
import Slider from "~/components/slider";
import Tiltedmarquee from "~/components/tiltedmarquee";
import Services from "~/components/services";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Voyager" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Slider />
        <Tiltedmarquee />
        <Services/>
      </main>
    </>
  );
}
