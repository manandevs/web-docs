// types/site.ts

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
  author: {
    name: string;
    url: string;
  };
}

export interface EnvConfig {
  NEXT_PUBLIC_APP_URL: string;
  GOOGLE_SHEETS_API_KEY?: string;
  GOOGLE_SHEETS_ID?: string;
  GOOGLE_SERVICE_ACCOUNT_EMAIL?: string;
  GOOGLE_PRIVATE_KEY?: string;
  NODE_ENV: 'development' | 'production' | 'test';
}