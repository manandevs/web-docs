export type DocSection = {
  title: string;
  description: string;
  code?: string;
  points: string[];
};

export type DocModule = {
  [key: string]: DocSection;
};

export type DocsData = Record<string, DocModule>;