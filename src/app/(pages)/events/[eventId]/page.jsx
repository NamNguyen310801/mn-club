"use client";

import { getEventDetailsAPI } from "@/app/_utils/services/event.api";
import { useEffect, useState } from "react";

export default function EventDetail({ params }) {
  const [event, setEvent] = useState();
  useEffect(() => {
     geteventDetail();
  }, []);
  const getEventDetail = async () => {
    const res = await getEventDetailsAPI(params.eventId);
    setEvent(res);
  };
  console.log(params);
  return (
    <div className="container min-h-screen flex flex-col py-10 lg:py-20">
      <h2 className="text-xl font-bold">{event?.title || "Header"}</h2>
      <div className="flex flex-col">
        <p dangerouslySetInnerHTML={{ __html: event?.description }} />
      </div>
    </div>
  );
}
