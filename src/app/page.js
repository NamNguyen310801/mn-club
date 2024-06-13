import { Event, Footer, Header, Hero, Testimonials } from "./_components";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container flex flex-col">
        <Hero />
        <Event />
        <Testimonials />
      </div>
      <Footer />
    </>
  );
}
