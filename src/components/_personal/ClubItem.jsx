import Image from "next/image";
import Link from "next/link";
import React from "react";
export default function ClubItem({ item, hidden = false }) {
  return (
    <Link
      href={`/club/${item?.clubId}`}
      className="relative flex-shrink-0 flex flex-col gap-y-3 cursor-pointer">
      <div className="pt-[56.25%] block object-cover rounded-[16px] relative w-full group overflow-hidden">
        <Image
          src={item?.avatar || ""}
          alt={item?.name || ""}
          width={160}
          height={90}
          unoptimized
          className="h-full rounded-[16px] w-full absolute object-cover top-0 left-0 "
        />
        {!hidden && <div>Avatar</div>}
      </div>
      {!hidden && (
        <div className="flex w-full flex-col px-4 ">
          <h4 className="font-semibold text-ellipsis line-clamp-1 text-center text-base text-gray-800">
            {item?.name} AAA
          </h4>
          <p className="text-ellipsis line-clamp-3 text-gray-600 text-center text-sm">
            {item?.email} aa
          </p>
        </div>
      )}
    </Link>
  );
}
