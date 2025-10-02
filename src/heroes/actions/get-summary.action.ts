import heroesApi from "../api/heroes.api";
import type { HeroInformationResponse } from "../types/summary-info.response";

export async function getSummary(): Promise<HeroInformationResponse> {
  const { data } = await heroesApi.get<HeroInformationResponse>("/summary");
  return data;
}
