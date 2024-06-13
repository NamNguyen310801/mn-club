import { EventItem } from "@/components/_personal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function PopularEvent({ plugin, eventList }) {
  return (
    <div className="w-full flex flex-col pt-10 xl:pt-20 gap-y-3 xl:gap-y-8">
      <h2 className="text-center text-[20px] md:text-[26px] uppercase mb-0 font-bold">
        Sự kiện nổi bật
      </h2>
      <Carousel
        className="w-full"
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="w-full gap-x-4 lg:gap-x-6 -ml-0">
          {eventList ||
            Array.from({ length: 6 }).map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-0 md:basis-1/2 max-w-full md:max-w-[calc(50%-8px)] lg:basis-1/3 lg:max-w-[calc(100%/3-16px)]">
                <EventItem hidden item={item} />
              </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
