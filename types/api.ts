// types/api.ts (Server Layer)

export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

export interface ApiSuccessResponse<T> {
  data: T;
  meta?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

export type ApiResponse<T> = ApiSuccessResponse<T> | ApiErrorResponse;

// Search specific
export interface SearchResult {
  id: string;
  title: string;
  content: string;
  url: string;
  type: "doc" | "project" | "blog";
  hierarchy?: {
    lvl0: string | null;
    lvl1: string | null;
    lvl2: string | null;
  };
}

export interface SearchRequest {
  query: string;
  limit?: number;
  filters?: Record<string, string>;
}

// Server Actions
export type ServerActionState<T = unknown> = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Record<string, string[]>;
  data?: T;
};

// Revalidation
export interface RevalidatePayload {
  secret: string;
  path?: string;
  tag?: string;
  type: "page" | "layout";
}