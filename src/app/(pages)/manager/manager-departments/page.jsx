"use client";
import { useDispatch, useSelector } from "react-redux";
import ManagerHeader from "../_components/ManagerHeader";
import DepartmentsTop from "./_components/DepartmentsTop";
import DepartmentsTable from "./_components/DepartmentsTable";
import {
  setDepartmentList,
  setIsGetDepartmentList,
} from "@/app/_utils/store/manager.slice";
import {
  deleteDepartmentAPI,
  getAllDepartmentAPI,
} from "@/app/_utils/services/department.api";
import { useEffect } from "react";
export default function ManagerDepartments() {
  const user = useSelector((state) => state.auth.userAuth);
  const dispatch = useDispatch();
  const departmentList = useSelector((state) => state.manager.departmentList);
  const isGetDepartmentList = useSelector(
    (state) => state.manager.isGetDepartmentList
  );
  useEffect(() => {
    getAllDepartment();
  }, [isGetDepartmentList]);

  const getAllDepartment = async () => {
    const res = await getAllDepartmentAPI();
    if (res?.status == 200) {
      dispatch(setDepartmentList(res?.data));
    }
  };
  const handleDelete = async (rowData) => {
    const res = await deleteDepartmentAPI(rowData);
    if (res?.status == 200) {
      dispatch(setIsGetDepartmentList(!isGetDepartmentList));
      toast("Xóa thành công!");
    } else {
      toast("Xóa không thành công!");
    }
  };
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.map(async (item) => item));
  return (
    <div className="w-full flex flex-col">
      <ManagerHeader user={user} title="Quản Lý Phòng Ban" />
      <main className="w-full flex flex-col">
        <DepartmentsTop />
        <DepartmentsTable
          departmentList={departmentList}
          onDelete={handleDelete}
        />
      </main>
    </div>
  );
}
