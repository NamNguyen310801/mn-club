import Image from "next/image";
import Link from "next/link";

export default function NotifyItem({ item }) {
  return (
    <Link
      href={item?.href || "#!"}
      className="flex items-start gap-x-2 hover:bg-blue-500/25 rounded-sm overflow-hidden w-full py-1 px-2">
      <div className="relative">
        <Image
          src={item?.avatar || "/next.svg"}
          alt={item?.type || ""}
          width={30}
          height={30}
          unoptimized
          className="w-10 h-10 rounded-full bg-contain bg-center border-[1px] border-blue-600 z-0"
        />
        <div className="w-5 h-5 overflow-hidden rounded-full absolute border-[1px] border-white bottom-1 left-2 z-[2]">
          A
        </div>
      </div>
      <div className="flex flex-col max-w-52 items-start text-sm gap-y-1">
        <h4 className="w-full">
          <span className="text-wrap whitespace-nowrap overflow-hidden text-ellipsis line-clamp-3">
            <b>Masda</b> added to his asdlk <b>Abaskd </b>
          </span>
        </h4>
        <span className="text-blue-500 font-semibold">few seconds ago</span>
        {/* <span className="text-primary font-semibold">time ago</span> */}
      </div>
    </Link>
  );
}
