"use client";
import { useEffect, useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import PopularEvent from "./_components/PopularEvent";
import EventList from "./_components/EventList";
import {
  setEventPublicList,
  setPopularEventList,
  setStartIndex,
} from "@/app/_utils/store/event.slice";
import {
  getAllEventPublicAPI,
  getAllPopularEventAPI,
} from "@/app/_utils/services/event.api";
export default function Event() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const eventPublicList = useSelector((state) => state.event.eventPublicList);
  const popularEventList = useSelector((state) => state.event.popularEventList);
  const startIndex = useSelector((state) => state.event.startIndex);
  const [disabled, setDisabled] = useState(false);
  const [length, setLength] = useState(0);

  useEffect(() => {
    getAllEventPublic();
  }, [startIndex]);

  useEffect(() => {
    if (!popularEventList) {
      getAllPopularEvent();
    }
  }, [popularEventList]);

  //
  const getAllEventPublic = async () => {
    setDisabled(true);
    const res = await getAllEventPublicAPI({ startIndex });
    if (res?.status == 200) {
      dispatch(setEventPublicList(res?.data?.data));
      setLength(res?.data?.length);
    }
    setDisabled(false);
  };

  //
  const getAllPopularEvent = async () => {
    const res = await getAllPopularEventAPI();
    if (res?.status == 200) {
      dispatch(setPopularEventList(res?.data));
    }
  };

  const onClick = () => {
    dispatch(setStartIndex(startIndex + 8));
  };

  return (
    <div className="container flex flex-col min-h-screen">
      <PopularEvent plugin={plugin} eventList={popularEventList} />
      <EventList
        eventList={eventPublicList}
        onClick={onClick}
        disabled={disabled}
        length={length}
      />
    </div>
  );
}
