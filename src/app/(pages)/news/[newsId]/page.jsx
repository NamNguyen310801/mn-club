"use client";

import { getNewsDetailsAPI } from "@/app/_utils/services/news.api";
import { useEffect, useState } from "react";

export default function NewsDetail({ params }) {
  const [news, setNews] = useState();
  useEffect(() => {
    // getNewsDetail();
  }, []);
  const getNewsDetail = async () => {
    const res = await getNewsDetailsAPI(params.newsId);
    setNews(res);
  };
  console.log(params);
  return (
    <div className="container min-h-screen flex flex-col py-10 lg:py-20">
      <h2 className="text-xl font-bold">{news?.title || "Header"}</h2>
      <div className="flex flex-col">
        <p dangerouslySetInnerHTML={{ __html: news?.description }} />
      </div>
    </div>
  );
}
