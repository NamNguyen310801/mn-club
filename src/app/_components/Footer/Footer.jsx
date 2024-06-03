"use client";
import { NavLinkList } from "@/app/_utils/data/data";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const showHeader =
    pathname === "/sign-in" || pathname === "/create-account" ? false : true;
  return (
    <footer className={`${!showHeader && "hidden"} bg-[#E5E5E5]`}>
      <div className="relative flex flex-col px-2 py-3 md:p-6 lg:p-8 xl:p-12 xl:mx-auto 2xl:max-w-[1500px]">
        <div className="hidden absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
          <Button className="flex items-center justify-center h-12 w-12 rounded-full">
            <ChevronUp strokeWidth={3} />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:pb-8 gap-y-3">
          <div className="flex flex-col md:gap-y-2">
            <div className="h-10">Logo</div>
            <div className="font-semibold text-xl">Omar Checo</div>
            <div>Ux Researcher</div>
            <div>Email me at</div>
            <div>contact@website.com</div>
          </div>

          <div className="flex flex-col">
            <h5 className="font-bold text-2xl">Lets Talk!</h5>
            <p className="text-justify md:mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna
              morbi massa dictum tristique convallis pretium eleifend habitant.
              Libero a arcu purus, elit, volutpat in nunc amet. Fermentum risus
              vel dolor id scelerisque senectus et, id nunc. Consectetur metus
              tristique ullamcorper semper purus massa eget urna.
            </p>
          </div>
        </div>

        <div className="flex items-center mt-12 border-t border-black pt-6">
          <nav className="flex items-center">
            <ul className="flex items-center text-sm md:text-base md:gap-x-8 gap-x-3">
              {NavLinkList?.map((item, index) => (
                <li key={index}>
                  <Link href={item?.href}>{item?.name}</Link>
                </li>
              ))}
              <li>
                <Link href={"/contact-me"}>Contact Me</Link>
              </li>
            </ul>
          </nav>
          <p className="ml-auto text-center text-sm text-primary md:text-base">
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
