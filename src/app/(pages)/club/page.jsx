"use client";
import { useEffect, useRef, useState } from "react";
import ClubList from "./_components/ClubList";
import PopularCLub from "./_components/PopularCLub";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllClubPublicAPI,
  getClubsByEventTypeAPI,
} from "@/app/_utils/services/club.api";
import {
  setClubPublicList,
  setRecruitmentClubList,
  setStartIndex,
} from "@/app/_utils/store/club.slice";
export default function Club() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const clubPublicList = useSelector((state) => state.club.clubPublicList);
  const recruitmentClubList = useSelector(
    (state) => state.club.recruitmentClubList
  );
  const [disabled, setDisabled] = useState(false);
  const [length, setLength] = useState(0);
  const startIndex = useSelector((state) => state.club.startIndex);

  useEffect(() => {
    getAllClubPublic();
  }, [startIndex]);

  useEffect(() => {
    if (!recruitmentClubList) {
      getClubsByEventType();
    }
  }, [recruitmentClubList]);

  const getAllClubPublic = async () => {
    setDisabled(true);
    const res = await getAllClubPublicAPI({ startIndex });
    if (res?.status == 200) {
      dispatch(setClubPublicList(res?.data?.data));
      setLength(res?.data?.length);
    }
    setDisabled(false);
  };

  const getClubsByEventType = async () => {
    const res = await getClubsByEventTypeAPI(5);
    if (res?.status == 200) {
      dispatch(setRecruitmentClubList(res?.data));
    }
  };
  const onClick = () => {
    dispatch(setStartIndex(startIndex + 8));
  };
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularCLub plugin={plugin} clubList={recruitmentClubList} />
      <ClubList
        clubList={clubPublicList}
        onClick={onClick}
        disabled={disabled}
        length={length}
      />
    </div>
  );
}
