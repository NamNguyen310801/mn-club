"use client";
import { Button } from "@mui/material";
import { HiDotsVertical, HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { RxCountdownTimer } from "react-icons/rx";
import { useState } from "react";
import { listTime } from "@/app/_utils/data/data";

export default function StatItem({ color, icon, grow = false, name = "" }) {
  const [title, setTitle] = useState("Last Month");

  return (
    <Button
      className="h-[220px] xl:h-[250px] rounded-md overflow-hidden p-4 xl:p-6 font-semibold capitalize"
      style={{
        backgroundImage: `linear-gradient(to right,${color?.[0]},${color?.[1]})`,
      }}>
      <div className="w-full h-full flex flex-col justify-around relative bg-transparent">
        {grow ? (
          <span className="absolute bottom-4 left-6 opacity-10 text-black text-[130px]">
            <HiTrendingUp />
          </span>
        ) : (
          <span className="absolute bottom-5 left-3 opacity-10 text-black text-[130px]">
            <HiTrendingDown />
          </span>
        )}
        <div className="w-full flex text-white h-1/2">
          <div className="flex flex-col items-center">
            <h4 className="text-xl">{name}</h4>
            <span className="text-[32px] font-bold">277</span>
          </div>
          <div className="ml-auto flex items-center justify-center w-12 h-12 xl:w-16 xl:h-16 rounded-md bg-gradient-to-br from-black/0 to-black/20">
            {icon && (
              <span className="text-[36px] opacity-40 text-white w-full h-full flex items-center justify-center">
                {icon}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center w-full mt-auto gap-x-2">
          <div className="text-white bg-black/20 px-2 py-1 rounded">+25%</div>
          <h6 className="text-white mb-0 mt-0">{title}</h6>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <span className="ml-auto hover:bg-black/10 flex items-center justify-center w-10 h-10 rounded-full">
                <HiDotsVertical className="text-[22px] text-black/50" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {listTime?.map((item, index) => (
                <DropdownMenuItem key={index}>
                  <div
                    className="flex items-center gap-x-2 min-w-16 cursor-pointer"
                    onClick={() => setTitle(item?.title)}>
                    <RxCountdownTimer /> <span>{item?.title}</span>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </Button>
  );
}
