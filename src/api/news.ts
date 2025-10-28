import { apiFetch } from "./client";

export interface NewsItem {
  _id: string;
  imgUrl: string;
  title: string;
  text: string;
  date: string;
  url: string;
  id: string;
}

export interface NewsResponse {
  page: number;
  perPage: number;
  results: NewsItem[];
  totalPages: number;
}

export async function getNews(page = 1, keyword = ""): Promise<NewsResponse> {
  const response = await apiFetch.get(`/news`, {
    params: {
      page,
      limit: 6,
      keyword: keyword || undefined, // якщо нічого не введено — не передаємо параметр
    },
  });
  return response.data;
}
