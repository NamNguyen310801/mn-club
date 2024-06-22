import Link from "next/link";
import React from "react";

export default function ClubItem({ item, hidden = false }) {
  return (
    <Link
      href={`/club/${item?.clubId}`}
      className="relative flex-shrink-0 flex flex-col gap-y-3 cursor-pointer">
      <div className="pt-[56.25%] block object-cover rounded-[16px] relative w-full group overflow-hidden">
        <img
          src={item?.avatar}
          alt={item?.name}
          className="h-full rounded-[16px] w-full absolute object-cover top-0 left-0 "
        />
      </div>
      {!hidden && (
        <div className="flex w-full flex-col px-4 text-base">
          <h4 className="font-semibold text-ellipsis line-clamp-1">
            {item?.name} _ {item?.code}
          </h4>
          <div className="text-orange-800 italic ">
            {moment(item?.foundingDate).format("DD/MMM/yyy")}
          </div>
          <p className="text-ellipsis line-clamp-3 text-primary">
            {item?.description}
          </p>
        </div>
      )}
    </Link>
  );
}
