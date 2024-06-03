export default function TestimonialsItem() {
  return (
    <div className="bg-[#E5E5E5] w-full flex flex-col p-4 border-none rounded-md overflow-hidden">
      <p className="w-full">
        “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet amet
        tristique ipsum aliquam. Vulputate dolor, nunc phasellus vestibulum
        turpis posuere turpis eget vel.”
      </p>
      <div className="w-full flex items-center justify-start mt-3">
        <img
          src="https://media.gettyimages.com/id/1317013882/photo/munich-germany-hans-dieter-flick-head-coach-of-fc-bayern-m%C3%BCnchen-reacts-during-the-bundesliga.jpg?s=612x612&w=0&k=20&c=MdYKtSpz5Hjj83y9YPncjQVqjhmS1ExbCKyKl0UWuaI="
          alt=""
          className="w-14 h-14 xl:w-20 xl:h-20 rounded-full object-center object-cover"
        />
        <div className="flex flex-col text-lg ml-4">
          <span className="text-black">Lorem Ipsum</span>
          <span className="text-primary">Facebook</span>
        </div>
      </div>
    </div>
  );
}
