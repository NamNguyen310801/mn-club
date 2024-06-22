"use client";
import { useEffect, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import PopularEvent from "./_components/PopularEvent";
import EventList from "./_components/EventList";
import {
  setEventPublicList,
  setStartIndex,
} from "@/app/_utils/store/event.slice";
import { getAllEventPublicAPI } from "@/app/_utils/services/event.api";
export default function Event() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const eventPublicList = useSelector((state) => state.event.eventPublicList);
  const popularEventList = useSelector((state) => state.event.popularEventList);
  const startIndex = useSelector((state) => state.event.startIndex);

  useEffect(() => {
    getAllEventPublic();
  }, [startIndex]);

  const getAllEventPublic = async () => {
    const res = await getAllEventPublicAPI(startIndex);
    console.log(res);
    // if (res) {
    //   dispatch(setEventPublicList(res));
    // }
  };
  const onClick = () => {
    dispatch(setStartIndex(startIndex + 8));
  };
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularEvent plugin={plugin} eventList={popularEventList} />
      <EventList eventList={eventPublicList} onClick={onClick} />
    </div>
  );
}
