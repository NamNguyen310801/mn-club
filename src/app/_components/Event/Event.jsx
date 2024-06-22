import { EventItem } from "@/components/_personal";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Event({ eventList }) {
  const listItem = eventList?.length > 6 ? eventList?.slice(0, 6) : eventList;
  return (
    <div className="flex flex-col py-5 md:py-8 xl:py-20">
      <h3 className="text-center text-[36px] font-semibold">Sự kiện</h3>
      <div className="w-full mt-8 xl:mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 md:gap-x-5 xl:gap-x-6 xl:gap-y-12 ">
        {listItem?.map((item, index) => (
          <EventItem hidden key={index} item={item} />
        ))}
      </div>
      <Link href={"/event"}>
        <div className="w-full text-center mt-8">
          <Button className="rounded-full xl:py-6">Xem tất cả</Button>
        </div>
      </Link>
    </div>
  );
}
