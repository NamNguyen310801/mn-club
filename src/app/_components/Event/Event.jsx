"use client";
import { EventItem, SearchInput } from "@/components/_personal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
export default function Event(props) {
  const { eventList } = props;
  const [textSearch, setTextSearch] = useState("");
  const [isFilter, setIsFilter] = useState(null);
  const listItem = eventList?.length > 6 ? eventList?.slice(0, 6) : eventList;
  const listFilter = [
    { title: "Đang diễn ra" },
    { title: "Sắp diễn ra" },
    { title: "Đã kết thúc" },
  ];
  const onChangeTextSearch = (e) => {
    setTextSearch(e.target.value);
  };
  const onFilter = (index) => {
    setIsFilter(index);
  };
  return (
    <div className="flex flex-col gap-y-2 py-5 md:py-8 xl:py-20">
      <h3 className="text-center text-[36px] font-semibold capitalize">
        Sự kiện dành cho bạn
      </h3>
      <div className="w-full flex items-center gap-x-2">
        <ul className="mr-auto flex">
          {listFilter?.map((item, index) => (
            <li
              className={`${
                isFilter === index ? "bg-primary text-white" : "bg-white "
              } px-4 py-2 cursor-pointer hover:bg-primary hover:text-white`}
              key={index}
              onClick={() => onFilter(index)}>
              {item?.title}
            </li>
          ))}
        </ul>
        <SearchInput
          placeholder={"Nhập tên sự kiện"}
          value={textSearch}
          onChange={onChangeTextSearch}
        />
        <Button>Tìm kiếm</Button>
      </div>
      <div className="w-full mt-8 xl:mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 md:gap-x-5 xl:gap-x-6 xl:gap-y-12 ">
        {listItem?.map((item, index) => (
          <EventItem hidden key={index} item={item} />
        ))}
      </div>
      <Link href={"/events"}>
        <div className="w-full text-center mt-8">
          <Button className="rounded-full xl:py-6">Xem tất cả</Button>
        </div>
      </Link>
    </div>
  );
}
