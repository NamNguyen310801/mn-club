"use client";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import { useDispatch, useSelector } from "react-redux";
import PopularNews from "./_components/PopularNews";
import NewsList from "./_components/NewsList";
export default function News() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const dispatch = useDispatch();
  const newsList = useSelector((state) => state.news.newsList);
  const popularNewsList = useSelector((state) => state.news.popularNewsList);
  return (
    <div className="container flex flex-col min-h-screen">
      <PopularNews plugin={plugin} newsList={popularNewsList} />
      <NewsList newsList={newsList} />
    </div>
  );
}
