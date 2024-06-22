"use client";

import { getClubDetailsAPI } from "@/app/_utils/services/club.api";
import { useEffect, useState } from "react";

export default function ClubDetail({ params }) {
  const [club, setClub] = useState();
  useEffect(() => {
    // getClubDetail();
  }, []);
  const getClubDetail = async () => {
    const res = await getClubDetailsAPI(params.clubId);
    setClub(res);
  };
  return (
    <div className="container min-h-screen flex flex-col py-10 lg:py-20">
      <h2 className="text-xl font-bold">{club?.name || "Header"}</h2>
    </div>
  );
}
