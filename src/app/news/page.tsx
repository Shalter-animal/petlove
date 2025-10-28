"use client";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import { useEffect, useState } from "react";
import { getNews, NewsResponse } from "@/api/news";
import { NewsCard } from "./NewsCard";
import { MainPagination } from "@/components/MainPagination";

export default function News() {
  const [searchItem, setSearchItem] = useState("");
  const [news, setNewsData] = useState<NewsResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const data = await getNews(currentPage, searchItem);
        setNewsData(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [currentPage, searchItem]);

  const newsData = news?.results;
  const filteredNews = newsData?.filter(
    (news) =>
      news.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      news.text.toLowerCase().includes(searchItem.toLowerCase())
  );

  const handlePageChange = (page: number) => {
    if (page !== currentPage) setCurrentPage(page);
  };

  console.log(news);

  const totalPages = news?.totalPages ?? 1;

  return (
    <>
      <Header />
      <main className="pt-16 px-5">
        {loading && <p>Loading...</p>}

        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <h1 className="font-bold text-[28px] leading-[28px] h-fit md:text-[54px] md:leading-[54px]">
            News
          </h1>
          <SearchInput
            className="mt-5 md:w-[230px] md:mt-0 md:focus-within:w-[500px] transition-all duration-300"
            onSearchChange={(value) => setSearchItem(value)}
          />
        </div>
        <div className="mt-6 grid grid-cols-1 gap-4 justify-items-center md:grid-cols-2 xl:grid-cols-3">
          {filteredNews?.length ? (
            filteredNews.map((news) => (
              <NewsCard key={news._id} news={news} searchItem={searchItem} />
            ))
          ) : (
            <p className="text-gray-500 mt-10 col-span-full">
              No results found 😕
            </p>
          )}
        </div>

        {totalPages > 1 && (
          <MainPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onChange={handlePageChange}
          />
        )}
      </main>
    </>
  );
}
