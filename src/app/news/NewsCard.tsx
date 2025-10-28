import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { highlightMatch } from "@/utils/highlightMatch";
import Image from "next/image";
import Link from "next/link";

interface NewsItemProps {
  news: {
    _id: string;
    title: string;
    text: string;
    imgUrl?: string;
    url: string;
    date: string;
  };
  searchItem: string;
}

export function NewsCard(props: NewsItemProps) {
  const { news, searchItem } = props;

  return (
    <Card key={news._id} className="w-[335px]">
      <CardHeader className="p-0">
        {news.imgUrl && (
          <Image
            src={news.imgUrl}
            alt="News Image"
            width={343}
            height={190}
            className="h-[190px] w-[335px] rounded-[15px]"
          />
        )}
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
  );
}
