"use client";
import { useRef } from "react";
import ClubList from "./_components/ClubList";
import PopularCLub from "./_components/PopularCLub";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
export default function Club() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const clubList = useSelector((state) => state.club.clubList);
  const popularClubList = useSelector((state) => state.club.popularClubList);
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularCLub plugin={plugin} clubList={popularClubList} />
      <ClubList clubList={clubList} />
    </div>
  );
}
