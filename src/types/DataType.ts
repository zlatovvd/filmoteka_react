import { MovieType } from "./MovieType"

export type DataType = {
    results: MovieType[] | null;
    page: number;
    total_pages: number;
}