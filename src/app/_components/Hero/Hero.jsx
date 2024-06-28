"use client";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { banner1, banner2, banner3 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const bannerList = [
    {
      src: banner1?.src,
    },
    {
      src: banner2?.src,
    },
    {
      src: banner3?.src,
    },
  ];
  return (
    <div className="flex items-start py-5 md:py-8 xl:py-10">
      <div className="flex flex-col md:basis-3/5 md:max-w-[60%] pr-4 xl:pr-6 md:min-h-[250px] xl:min-h-[450px] text-justify">
        <h2 className="text-gray-600/90 font-bold text-2xl xl:text-[48px] xl:leading-[3rem] text-wrap ">
          Cùng khám phá các <span className="text-green-600">Câu lạc bộ</span> &{" "}
          <span className="text-green-600"> Hội nhóm</span> của chúng tôi
        </h2>
        <p className="text-black/90 xl:mt-2 text-sm lg:text-base xl:text-lg">
          Câu lạc bộ là một môi trường gần gũi và thú vị dành cho tất cả mọi
          người. Các câu lạc bộ tại SMC tự hào đóng chào bạn tham gia vào một
          cộng đồng năng động với lượng câu lạc bộ lớn đang hoạt động.
        </p>
        <p className="text-black/90 xl:mt-2 text-sm lg:text-base xl:text-lg">
          Các câu lạc bộ tổ chức đa dạng các hoạt động hàng tuần và sự kiện đặt
          biệt từ các cuộc trò chuyện về nhiều chủ đề thú vị, hoạt động xã hội
          đến dự án từ thiện và các khóa học thuật. Điều này giúp mọi người có
          cơ hội tận hưởng một trải nghiệm đặc biệt và đa dạng tại câu lạc bộ.
        </p>
        <p className="text-black/90 xl:mt-2 text-sm lg:text-base xl:text-lg">
          Đánh giá cao sự tham gia tích cực của tất cả mọi người và khuyến khích
          sáng tạo, sẻ chia kiến thức và kỹ năng, cùng với việc xây dựng mối
          quan hệ thân mật. Dù bạn là người mới tham gia hoặc đã có kinh nghiệm.
        </p>
        <div className="mt-6 md:mt-auto">
          <Link href={"#home_club"}>
            <Button className="rounded-full xl:py-4">Khám phá</Button>
          </Link>
        </div>
      </div>
      <div className="hidden md:block md:basis-2/5 md:max-w-[40%] p-6 rounded-lg overflow-hidden shadow md:min-h-[250px] xl:min-h-[450px]">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}>
          <CarouselContent>
            {bannerList.map((item, index) => (
              <CarouselItem key={index}>
                <Image
                  src={item?.src}
                  alt="banner"
                  width={200}
                  height={200}
                  className="w-full h-full bg-center bg-cover rounded-lg overflow-hidden"
                  unoptimized
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
