"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import NewsTop from "./_components/NewsTop";
import NewsTable from "./_components/NewsTable";

export default function AdminNews() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Tin Tức" />
      <main className="w-full flex flex-col">
        <NewsTop />
        <NewsTable />
      </main>
    </div>
  );
}
