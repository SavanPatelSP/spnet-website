export interface NewsArticle {
  date: string;
  title: string;
  category: string;
  excerpt: string;
  featured?: boolean;
}

export const articles: NewsArticle[] = [];
