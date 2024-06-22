"use client";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import StudentTop from "./_components/StudentTop";
import StudentTable from "./_components/StudentTable";
import { setStudentList } from "@/app/_utils/store/admin.slice";
import { getAllStudentAPI } from "@/app/_utils/services/student.api";
import { useEffect } from "react";

export default function StudentList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);
  const studentList = useSelector((state) => state.admin.studentList);
  const isGetStudentList = useSelector((state) => state.admin.isGetStudentList);

  useEffect(() => {
    // getAllStudent();
  }, [isGetStudentList]);

  const getAllStudent = async () => {
    const res = await getAllStudentAPI();
    if (res?.status) {
      dispatch(setStudentList(res));
    }
  };
  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Sinh Viên" />
      <main className="w-full flex flex-col">
        <StudentTop />
        <StudentTable studentList={studentList} />
      </main>
    </div>
  );
}
