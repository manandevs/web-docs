// types/next.ts (App Router)

import { Metadata } from "next";
import { SearchParams } from "./utils";

export type GenerateMetadataProps = {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<SearchParams>;
};

export type PageProps = {
  params: Promise<Record<string, string | string[]>>;
  searchParams: Promise<SearchParams>;
};

export type LayoutProps = {
  children: React.ReactNode;
  params: Promise<Record<string, string | string[]>>;
};

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};