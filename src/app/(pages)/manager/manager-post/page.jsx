"use client";
import { useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
import PostTop from "./_components/PostTop";
export default function ManagerPost() {
  const user = useSelector((state) => state.auth.userAuth);

  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Bài Viết" />
      <main className="w-full flex flex-col">
        <PostTop />
      </main>
    </div>
  );
}
