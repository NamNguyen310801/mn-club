"use client";
import { Mail, User } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
const listNavigation = [
  { name: "Giới thiệu", href: "#club_gioi_thieu" },
  { name: "Sự kiện", href: "#club_su_kien" },
  { name: "Tin tức", href: "#club_tin_tuc" },
  { name: "Thành tích", href: "#club_thanh_tich" },
];
export default function ClubDetailItem({ club }) {
  const [navigationId, setNavigationId] = useState(0);
  return (
    <div className="flex flex-col">
      <div className="w-full h-[280px] relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="banner"
          className="w-full h-full bg-center bg-contain rounded-md"
        />
        <div className="rounded-full absolute bottom-0 w-32 h-32 bg-white border-2 overflow-hidden right-1/2 translate-x-1/2 translate-y-1/2">
          <img
            src="https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="banner"
            className="w-full h-full bg-center bg-contain"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="mt-20 text-center font-bold text-xl">CLUB NAME</h2>
        <div className="grid grid-cols-3 mt-6">
          {/* navigation */}
          <div className="flex flex-col justify-start col-span-2">
            <ul className="flex items-center gap-x-4 text-sm">
              {listNavigation?.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    navigationId === index &&
                    "text-primary border-b-2 border-primary"
                  } py-3 px-2 `}
                  onClick={() => setNavigationId(index)}>
                  <Link href={item?.href} className="text-center">
                    {item?.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="py-10">
              <h3 className="font-semibold" id="club_gioi_thieu">
                Giới thiệu
              </h3>
              <div className="w-full">{"gioi thieu o day"}</div>
            </div>
            <div className="py-10">
              <h3 className="font-semibold" id="club_su_kien">
                Sự kiện
              </h3>
              <div className="w-full">{"Ds su kien o day"}</div>
            </div>
            <div className="py-10">
              <h3 className="font-semibold" id="club_tin_tuc">
                Tin tức
              </h3>
              <div className="w-full">{"Ds tin tuc o day"}</div>
            </div>
            <div className="py-10">
              <h3 className="font-semibold" id="club_thanh_tich">
                Thành tích
              </h3>
              <div className="w-full">{"Ds thanh tich o day"}</div>
            </div>
          </div>
          {/* Lien he */}
          <div className="flex flex-col justify-center">
            <h3 className="font-semibold">Liên hệ</h3>
            <div className="flex items-center gap-x-2">
              <User color="#8177b1" size={18} />
              Chủ nhiệm:
            </div>
            <div className="flex items-center gap-x-2">
              <Mail color="#8177b1" size={18} />
              Email
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
