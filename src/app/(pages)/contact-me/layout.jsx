import { Footer, Header } from "@/app/_components";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="w-full h-full">{children}</div>
      <Footer />
    </>
  );
}
