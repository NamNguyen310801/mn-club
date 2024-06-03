import { TestimonialsItem } from "@/components/_personal";

export default function Testimonials() {
  return (
    <div className="flex flex-col py-5 md:py-8 xl:py-20 border-t border-black">
      <h3 className="text-center text-[36px] font-semibold">Testimonials</h3>
      <div className="w-full mt-8 xl:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-6 md:gap-y-8 md:gap-x-5 xl:gap-x-6 xl:gap-y-12 ">
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
        <TestimonialsItem />
      </div>
    </div>
  );
}
