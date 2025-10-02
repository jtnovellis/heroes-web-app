import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import type { HeroResponse } from "../types/get-heroes.response";
import { getHeroesByPage } from "../actions/get-heroes-by-page.action";

interface Props {
  page: string;
  limit: string;
  category?: string;
}

export function usePaginateHero({
  page,
  limit,
  category = "all",
}: Props): UseQueryResult<HeroResponse> {
  return useQuery({
    queryKey: ["heroes", { page, limit, category }],
    queryFn: () => getHeroesByPage(Number(page), Number(limit), category),
    staleTime: 1000 * 60 * 5,
  });
}
