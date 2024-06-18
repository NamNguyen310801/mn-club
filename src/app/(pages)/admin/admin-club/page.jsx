"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import ClubTop from "./_components/ClubTop";
import ClubTable from "./_components/ClubTable";

export default function AdminClub() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Câu Lạc Bộ" />
      <main className="w-full flex flex-col">
        <ClubTop />
        <ClubTable />
      </main>
    </div>
  );
}
