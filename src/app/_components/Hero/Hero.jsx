import { Button } from "@/components/ui/button";
export default function Hero() {
  return (
    <div className="flex items-start py-5 md:py-8 xl:py-10">
      <div className="flex flex-col md:basis-3/5 md:max-w-[60%] pr-4 md:min-h-[250px] xl:min-h-[400px]">
        <h2 className="text-black/90 font-bold text-2xl xl:text-[48px] xl:leading-[3rem] text-wrap ">
          Hey there, I'm Omar. A{" "}
          <span className="text-primary">UX Researcher</span> &{" "}
          <span className="text-primary"> Product Designer</span>
        </h2>
        <p className="text-black/90 xl:mt-2 text-sm lg:text-base">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          enim, assumenda architecto officia aliquam ea eaque quidem maxime
          labore reiciendis porro perferendis voluptas, cum accusamus sequi quis
          corrupti? Cum, neque?
        </p>
        <div className="mt-6 md:mt-auto">
          <Button className="rounded-full xl:py-6">Discover My Work</Button>
        </div>
      </div>
      <div className="hidden md:block md:basis-2/5 md:max-w-[60%] px-4 border rounded-lg overflow-hidden shadow md:min-h-[250px] xl:min-h-[400px]">
        Card
      </div>
    </div>
  );
}
