"use client";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import { NewsData } from "@/data/NewsData";
import { highlightMatch } from "@/utils/highlightMatch";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationNextEnd,
  PaginationPrevious,
  PaginationPreviousEnd,
} from "@/components/ui/pagination";

export default function News() {
  const [searchItem, setSearchItem] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 6;

  const filteredNews = NewsData.filter(
    (news) =>
      news.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      news.text.toLowerCase().includes(searchItem.toLowerCase())
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = filteredNews.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useMemo(() => {
    setCurrentPage(1);
  }, [searchItem]);

  return (
    <>
      <Header />
      <main className="pt-16 px-5">
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
          {visibleItems.length > 0 ? (
            visibleItems.map((news) => (
              <Card key={news._id} className="w-[335px]">
                <CardHeader className="p-0">
                  <Image
                    src={news.imgUrl}
                    alt="News Image"
                    width={343}
                    height={190}
                    className="h-[190px] w-[335px] rounded-[15px]"
                  />
                </CardHeader>
                <CardContent className="p-0">
                  <h4 className="font-bold leading-[20px] tracking-[-0.02em] mb-3">
                    {highlightMatch(news.title, searchItem)}
                  </h4>
                  <p className="font-medium text-sm leading-[18px] tracking-[-0.02em]">
                    {highlightMatch(news.text, searchItem)}
                  </p>
                </CardContent>
                <CardFooter className="p-0 flex justify-between">
                  <p className="text-gray-700/50">
                    {new Date(news.date).toLocaleDateString()}
                  </p>
                  <Link href={news.url} className="text-primary underline">
                    Read more
                  </Link>
                </CardFooter>
              </Card>
            ))
          ) : (
            <p className="text-gray-500 mt-10 col-span-full">
              No results found 😕
            </p>
          )}
        </div>

        {/* 📄 Пагінація */}
        {filteredNews.length > itemsPerPage && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPreviousEnd
                  href="#"
                  onClick={() => handlePageChange(1)}
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                />
              </PaginationItem>

              {Array.from({ length: totalPages }).map((_, index) => {
                const page = index + 1;
                return (
                  <PaginationItem key={page}>
                    <PaginationLink
                      href="#"
                      isActive={currentPage === page}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}

              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() =>
                    handlePageChange(Math.min(currentPage + 1, totalPages))
                  }
                />
              </PaginationItem>
              <PaginationItem>
                <PaginationNextEnd
                  href="#"
                  onClick={() => handlePageChange(totalPages)}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>
    </>
  );
}
