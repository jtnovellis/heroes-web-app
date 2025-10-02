import { useQuery, type UseQueryResult } from "@tanstack/react-query";
import { getSummary } from "../actions/get-summary.action";
import type { HeroInformationResponse } from "../types/summary-info.response";

export function useHeroSummary(): UseQueryResult<HeroInformationResponse> {
  return useQuery({
    queryKey: ["summary-information"],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 5,
  });
}
