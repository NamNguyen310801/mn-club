"use client";
import { useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
import AwardTop from "./_components/AwardTop";

export default function ManagerAward() {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Giải Thưởng" />
      <main className="w-full flex flex-col">
        <AwardTop />
      </main>
    </div>
  );
}
