"use client";
import { useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import StudentTop from "./_components/StudentTop";
import StudentTable from "./_components/StudentTable";

export default function StudentList() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Sinh Viên" />
      <main className="w-full flex flex-col">
        <StudentTop />
        <StudentTable />
      </main>
    </div>
  );
}
