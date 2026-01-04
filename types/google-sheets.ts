// types/google-sheets.ts

export interface GoogleSheetConfig {
  spreadsheetId: string;
  range: string;
  apiKey?: string;
}

export type RawSheetRow = string[];

export type SheetRowData = Record<string, string | number | boolean | null>;

export interface ProjectData {
  id: string;
  name: string;
  description: string;
  status: "active" | "archived" | "beta";
  category: string;
  tags: string[];
  websiteUrl?: string;
  githubUrl?: string;
  updatedAt: string;
}

export interface SheetError {
  code: number;
  message: string;
  status: string;
}