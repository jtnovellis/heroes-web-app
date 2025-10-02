import heroesApi from "../api/heroes.api";
import type { HeroResponse } from "../types/get-heroes.response";

export async function getHeroesByPage(): Promise<HeroResponse> {
  const { data } = await heroesApi.get<HeroResponse>("/");
  return data;
}
