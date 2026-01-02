// types/utils.ts

export type Prettify<T> = {
  [K in keyof T]: T[K];
} & {};

export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Maybe<T> = T | null | undefined;

export type Dict<T = unknown> = Record<string, T>;

export type AsyncResult<T, E = Error> = 
  | { success: true; data: T; error?: never }
  | { success: false; data?: never; error: E };

export type SearchParams = { [key: string]: string | string[] | undefined };
