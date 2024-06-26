"use client";
import { useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
import MemberTop from "./_components/MemberTop";

export default function ManagerMember() {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Thành Viên" />
      <main className="w-full flex flex-col">
        <MemberTop />
      </main>
    </div>
  );
}
