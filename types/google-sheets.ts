// types/google-sheets.ts

export interface GoogleSheetConfig {
  spreadsheetId: string;
  range: string;
  apiKey?: string;
}

// Represents a raw row from Google Sheets API
export type RawSheetRow = string[];

// Represents a row converted to a keyed object
export type SheetRowData = Record<string, string | number | boolean | null>;

// Specific domain model for a project/resource fetched from Sheets
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