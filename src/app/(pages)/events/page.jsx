"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import PopularEvent from "./_components/PopularEvent";
import EventList from "./_components/EventList";
export default function Event() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const eventList = useSelector((state) => state.event.eventList);
  const popularEventList = useSelector((state) => state.event.popularEventList);
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularEvent plugin={plugin} eventList={popularEventList} />
      <EventList eventList={eventList} />
    </div>
  );
}
