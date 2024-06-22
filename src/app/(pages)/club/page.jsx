"use client";
import { useEffect, useRef } from "react";
import ClubList from "./_components/ClubList";
import PopularCLub from "./_components/PopularCLub";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import { getAllClubPublicAPI } from "@/app/_utils/services/club.api";
import {
  setClubPublicList,
  setStartIndex,
} from "@/app/_utils/store/club.slice";
export default function Club() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const clubPublicList = useSelector((state) => state.club.clubPublicList);
  const recruitmentClubList = useSelector(
    (state) => state.club.recruitmentClubList
  );
  const startIndex = useSelector((state) => state.club.startIndex);
  useEffect(() => {
    getAllClubPublic();
  }, [startIndex]);

  const getAllClubPublic = async () => {
    const res = await getAllClubPublicAPI(startIndex);
    console.log(res);

    // if (res) {
    //   dispatch(setClubPublicList(res));
    // }
  };
  const onClick = () => {
    dispatch(setStartIndex(startIndex + 8));
  };
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularCLub plugin={plugin} clubList={recruitmentClubList} />
      <ClubList clubList={clubPublicList} onClick={onClick} />
    </div>
  );
}
