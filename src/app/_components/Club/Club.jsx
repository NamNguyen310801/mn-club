import { ClubItem } from "@/components/_personal";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Club() {
  return (
    <div className="flex flex-col py-5 md:py-8 xl:py-20" id="home_club">
      <h3 className="text-center text-[36px] font-semibold capitalize">
        Club dành cho bạn
      </h3>
      <div className="w-full mt-8 xl:mt-12 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-6 md:gap-y-8 md:gap-x-5 xl:gap-x-6 xl:gap-y-12 ">
        {/* {listItem?.map((item, index) => (
         <ClubItem hidden key={index} item={item} />
       ))} */}
        <ClubItem />
        <ClubItem />
        <ClubItem />
      </div>

      <div className="w-full text-center mt-8">
        <Link href={"/club"}>
          <Button className="rounded-full xl:py-5">Xem tất cả</Button>
        </Link>
      </div>
    </div>
  );
}
