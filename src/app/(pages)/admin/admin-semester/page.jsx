"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import SemesterTop from "./_components/SemesterTop";

export default function AdminSemester() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <main className="w-full flex flex-col">
      <AdminHeader user={user} title="Admin Semester" />
      <SemesterTop />
    </main>
  );
}
