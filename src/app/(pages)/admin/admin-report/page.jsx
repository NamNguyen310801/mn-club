"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";

export default function AdminReport() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Báo Cáo" />
      <main className="w-full flex flex-col"></main>
    </div>
  );
}
