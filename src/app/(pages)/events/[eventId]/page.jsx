"use client";

import { getEventDetailsAPI } from "@/app/_utils/services/event.api";
import { EventDetailItem } from "@/components/_personal";
import { useEffect, useState } from "react";

export default function EventDetail({ params }) {
  const [event, setEvent] = useState();
  useEffect(() => {
    getEventDetail();
  }, []);
  const getEventDetail = async () => {
    const res = await getEventDetailsAPI(params.eventId);
    setEvent(res);
  };
  console.log(params);
  return (
    <div className="container min-h-screen flex flex-col py-10 lg:py-20">
      <EventDetailItem dataRow={event} />
    </div>
  );
}
