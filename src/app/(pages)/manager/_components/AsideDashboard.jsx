"use client";
import Image from "next/image";
import Link from "next/link";
import DashboardItem from "./DashboardItem";
import { usePathname } from "next/navigation";
import { DashboardList } from "@/app/_utils/data/data";

export default function AsideDashboard() {
  const pathname = usePathname();
  return (
    <aside className="min-h-screen flex flex-col bg-[#383F51] ">
      <div className="h-20 flex items-center justify-center w-full border-b border-[#4e5870]">
        <Link href={"/"}>
          <Image
            src={"/next.svg"}
            width={150}
            height={96}
            alt="logo"
            className="h-12 md:h-20 "
          />
        </Link>
      </div>
      <div className="h-full flex text-white mt-4 items-start justify-start">
        <ul className="w-full flex flex-col">
          {DashboardList?.map((item, index) => (
            <DashboardItem pathname={pathname} item={item} key={index} />
          ))}
        </ul>
      </div>
    </aside>
  );
}
