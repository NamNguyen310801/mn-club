"use client";
import { useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
export default function ManagerDepartments() {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Phòng Ban" />
      <main className="w-full flex flex-col"></main>
    </div>
  );
}
