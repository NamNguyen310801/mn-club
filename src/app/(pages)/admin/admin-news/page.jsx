"use client";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../_components/AdminHeader";
import NewsTop from "./_components/NewsTop";
import NewsTable from "./_components/NewsTable";
import { setIsGetNewsList, setNewsList } from "@/app/_utils/store/admin.slice";
import { getAllNewsAPI } from "@/app/_utils/services/news.api";

export default function AdminNews() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.userAuth);
  const newsList = useSelector((state) => state.admin.newsList);
  const isGetNewsList = useSelector((state) => state.admin.isGetNewsList);

  useEffect(() => {
    getAllNews();
  }, [isGetNewsList]);

  const getAllNews = async () => {
    const res = await getAllNewsAPI();
    if (res?.status) {
      dispatch(setNewsList(res));
    }
  };
  const handleDelete = async (rowData) => {
    const res = await deleteNewsAPI(rowData);
    if (res?.status == 200) {
      dispatch(setIsGetNewsList(!isGetNewsList));
      toast("Xóa thành công!");
    } else {
      toast("Xóa không thành công!");
    }
  };

  return (
    <div className="w-full flex flex-col">
      <AdminHeader user={user} title="Quản Lý Tin Tức" />
      <main className="w-full flex flex-col">
        <NewsTop />
        <NewsTable newsList={newsList} />
      </main>
    </div>
  );
}
