import { Event, Hero, Testimonials } from "./_components";

export default function Home() {
  return (
    <div className="container flex flex-col">
      <Hero />
      <Event />
      <Testimonials />
    </div>
  );
}
