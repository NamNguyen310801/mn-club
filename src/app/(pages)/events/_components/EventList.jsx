import { EventItem } from "@/components/_personal";
import { Button } from "@/components/ui/button";

export default function EventList({ eventList, onClick }) {
  return (
    <div className="w-full flex flex-col py-10 xl:py-20 gap-y-3 xl:gap-y-8">
      <h2 className="text-center text-[20px] md:text-[26px] uppercase mb-0 font-bold">
        Danh sách sự kiện
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1 md:gap-2 xl:gap-3 py-4 xl:py-6">
        <EventItem />
      </div>
      <div className="flex items-center justify-center">
        <Button className="max-w-40" onClick={() => console.log("a")}>
          Xem Thêm
        </Button>
      </div>
    </div>
  );
}