"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import EventTop from "./_components/EventTop";
import EventTable from "./_components/EventTable";

export default function AdminEvent() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Sự Kiện" />
      <main className="w-full flex flex-col">
        <EventTop />
        <EventTable />
      </main>
    </div>
  );
}
