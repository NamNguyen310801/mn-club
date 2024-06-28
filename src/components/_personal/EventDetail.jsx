"use client";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Calendar, Check, Copy, MapPin, Pencil, X } from "lucide-react";

export default function EventDetail({ dataRow }) {
  const [data, setData] = useState();
  useEffect(() => {
    setData(dataRow);
  }, [dataRow]);
  const markup = { __html: data?.description };
  return (
    <div className="flex flex-col">
      {/* Banner */}
      <div className="w-full h-[280px] rounded-md overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1678823283560-4453bbd2a368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="banaer"
          className="w-full h-full bg-center bg-contain"
        />
      </div>
      {/* head */}
      <div className="grid grid-cols-3 p-4 mt-4 gap-x-8">
        <div className="col-span-2">
          <h1 className="text-xl font-bold">Tên Sự kiện</h1>
          <div className="w-full grid grid-cols-2 mt-4">
            <div className="w-full flex flex-col gap-y-2">
              <h3 className="flex items-center gap-x-2 text-wrap ">
                <MapPin color="#0084ff" size={16} />
                <span className="text-base font-semibold">Địa điểm:</span>
              </h3>
              <p className="text-sm">
                Trạng thái:{" "}
                <span className="px-2 py-1 bg-yellow-500 text-white rounded-full medium">
                  Chờ phê duyệt
                </span>
                <span className="px-2 py-1 bg-green-500 text-white rounded-full medium">
                  Đã phê duyệt
                </span>{" "}
                <span className="px-2 py-1 bg-red-500 text-white rounded-full medium">
                  Từ chối
                </span>
              </p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-col w-40 text-center">
                <h3 className="flex gap-x-1 items-center justify-center">
                  <Calendar color="#0084ff" size={16} />
                  <span className="text-base font-semibold">Ngày bắt đầu</span>
                </h3>
                <div className="flex flex-col mt-2">
                  <div className="bg-primary py-2 text-white font-semibold rounded-t ">
                    Tháng
                  </div>
                  <div className="h-32 flex items-center justify-center text-[42px] font-bold bg-slate-200 shadow rounded-b">
                    <span>5</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-40 text-center">
                <h3 className="flex gap-x-1 items-center justify-center">
                  <Calendar color="#0084ff" size={16} />
                  <span className="text-base font-semibold">Ngày kết thúc</span>
                </h3>
                <div className="flex flex-col mt-2">
                  <div className="bg-primary py-2 text-white font-semibold rounded-t ">
                    Tháng
                  </div>
                  <div className="h-32 flex items-center justify-center text-[42px] font-bold bg-slate-200 shadow rounded-b">
                    <span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3 justify-center">
          <Button className="bg-green-700 hover:bg-green-600 text-white">
            <Check color="#ffffff" size={16} />
            <span className="ml-1">Duyệt sự kiện</span>
          </Button>
          <Button className="bg-red-600 hover:bg-red-500 text-white">
            <X color="#ffffff" size={16} />
            <span className="ml-1">Từ chối sự kiện</span>
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-500 text-white">
            <Pencil color="#ffffff" size={16} />
            <span className="ml-1">Chỉnh sửa sự kiện</span>
          </Button>
          <Button className="bg-gray-500 hover:bg-gray-400 text-white">
            <Copy color="#ffffff" size={16} />
            <span className="ml-1">Sao chép sự kiện</span>
          </Button>
        </div>
      </div>
      {/*  Detail*/}
      <div className="flex flex-col">
        <h3>Chi tiết sự kiện</h3>
        <div className="flex flex-col">
          <p dangerouslySetInnerHTML={markup} />
        </div>
      </div>
    </div>
  );
}
