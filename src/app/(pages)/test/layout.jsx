import { Footer, Header } from "@/app/_components";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full h-full min-h-screen container">{children}</div>
      <Footer />
    </>
  );
}
