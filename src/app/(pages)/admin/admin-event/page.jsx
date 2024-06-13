"use client";
import { useSelector } from "react-redux";
import EventTop from "./_components/EventTop";
import AdminHeader from "../_components/AdminHeader";

export default function AdminEvent() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <main className="w-full flex flex-col">
      <AdminHeader user={user} title="Admin Event" />
      <EventTop />
    </main>
  );
}
