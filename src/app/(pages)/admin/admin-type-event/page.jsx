"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";

export default function AdminTypeEvent() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Loại Sự Kiện" />
      <main className="w-full flex flex-col"></main>
    </div>
  );
}
