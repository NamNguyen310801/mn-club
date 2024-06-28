import { CalendarDays } from "lucide-react";
import moment from "moment";
import Link from "next/link";

export default function NewsItem({ item, hidden = false }) {
  return (
    <div className="relative flex-shrink-0 flex flex-col gap-y-3">
      <Link
        href=""
        className="pt-[56.25%] block object-cover rounded-[16px] relative w-full group overflow-hidden">
        <img
          src={item?.banner || ""}
          alt={item?.name || ""}
          className="h-full rounded-[16px] w-full absolute object-cover top-0 left-0 "
        />
      </Link>
      {!hidden && (
        <div className="flex w-full flex-col px-4 text-base gap-y-2">
          <div className="flex items-center w-full gap-x-3 py-1">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={item?.banner || ""}
                alt={item?.name || ""}
                className="w-full h-full bg-center bg-contain"
              />
            </div>
            <div className="flex flex-col justify-start">
              <h5 className="font-semibold text-ellipsis line-clamp-1 text-gray-700">
                {item?.name} Aa
              </h5>
              <div className="flex items-center gap-x-1 text-[#8f8a8a] text-sm">
                <CalendarDays size={14} color="#8f8a8a" />
                <span> {moment(item?.date).format("DD/MMM/yyy")}</span>
              </div>
            </div>
          </div>
          <div className="text-sm text-gray-600">Thể loại: {item?.name}</div>
          <h4 className="font-semibold text-ellipsis line-clamp-1">
            {item?.name}
          </h4>
        </div>
      )}
    </div>
  );
}
