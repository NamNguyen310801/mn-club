"use client";
import { useSelector } from "react-redux";

export default function ManagerEvent() {
  const user = useSelector((state) => state.auth.userAuth);
  const userList = useSelector((state) => state.admin.userList);

  return <main className="w-full flex flex-col">EventList</main>;
}
