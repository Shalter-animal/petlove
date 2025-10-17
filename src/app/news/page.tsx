"use client";
import { Header } from "@/components/Header";
import { SearchInput } from "@/components/SearchInput";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Link from "next/link";
import { useState } from "react";

const NewsData = [
  {
    _id: "658b694505a6bcd9b9379466",
    imgUrl: "/news/dcd9ca77a733d93b6a4ae0f9e55320f97e2455c6.png",
    title: "What I Learned Dogsitting for New York City’s Opulent Elite",
    text: "In January, I fell in love with someone. It was the last thing I’d expect and caught me completely off guard. He has sandy blond hair with flecks of gray and gorgeous, sad eyes.",
    date: "2023-04-11T09:00:18+0000",
    url: "https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html",
    id: "nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b",
  },
  {
    _id: "658b694505a6bcd9b9379465",
    imgUrl: "/news/dcd9ca77a733d93b6a4ae0f9e55320f97e2455c6.png",
    title: "When Helpless Fish Need a Hero, She Answers the Call",
    text: "Three hundred goldfish in a hospital basement, a suckermouth at the airport: When fish are in crisis, a Bronx beautician and a partner in Pennsylvania ride to the rescue.",
    date: "2023-04-11T09:00:18+0000",
    url: "https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html",
    id: "nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b",
  },
  {
    _id: "658b694505a6bcd9b9379464",
    imgUrl: "/news/dcd9ca77a733d93b6a4ae0f9e55320f97e2455c6.png",
    title: "3 Dogs Die After Eating Poisoned Meatballs at a Race in France",
    text: "In a city of yawning class inequality, some side hustles let you glimpse how the other half lives.",
    date: "2023-04-11T09:00:18+0000",
    url: "https://www.nytimes.com/2023/04/11/magazine/dogsitting-rich-new-york.html",
    id: "nyt://article/8d29f1fc-d146-509d-8ceb-5a5b17d7886b",
  },
];

export default function News() {
  const [searchItem, setSearchItem] = useState("");

  const filteredNews = NewsData.filter(
    (news) =>
      news.title.toLowerCase().includes(searchItem.toLowerCase()) ||
      news.text.toLowerCase().includes(searchItem.toLowerCase())
  );

  const highlightMatch = (text: string, query: string) => {
    if (!query.trim()) return text;

    const regex = new RegExp(`(${query})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark
          key={index}
          className="bg-yellow-200 text-black font-semibold rounded-sm"
        >
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

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
          {filteredNews.length > 0 ? (
            filteredNews.map((news) => (
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
      </main>
    </>
  );
}
