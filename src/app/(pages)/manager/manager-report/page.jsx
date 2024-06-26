"use client";
import { useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
import ReportTop from "./_components/ReportTop";
export default function ManagerReport() {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Báo Cáo" />
      <main className="w-full flex flex-col">
        <ReportTop />
      </main>
    </div>
  );
}
