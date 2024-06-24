"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import PopularNews from "./_components/PopularNews";
import NewsList from "./_components/NewsList";
import { getAllNewsPublicAPI } from "@/app/_utils/services/news.api";
import {
  setNewsPublicList,
  setStartIndex,
} from "@/app/_utils/store/news.slice";
export default function News() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const newsPublicList = useSelector((state) => state.news.newsPublicList);
  const popularNewsList = useSelector((state) => state.news.popularNewsList);
  const startIndex = useSelector((state) => state.news.startIndex);

  useEffect(() => {
    getAllNewsPublic();
  }, [startIndex]);

  const getAllNewsPublic = async () => {
    const res = await getAllNewsPublicAPI(startIndex);
    if (res?.status == 200) {
      dispatch(setNewsPublicList(res?.data));
    }
  };
  const onClick = () => {
    dispatch(setStartIndex(startIndex + 8));
  };
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularNews plugin={plugin} newsList={popularNewsList} />
      <NewsList newsList={newsPublicList} onClick={onClick} />
    </div>
  );
}
