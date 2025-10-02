import heroesApi from "../api/heroes.api";
import type { HeroResponse } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getHeroesByPage(): Promise<HeroResponse> {
  const { data } = await heroesApi.get<HeroResponse>("/");

  return {
    ...data,
    heroes: data.heroes.map((hero) => ({
      ...hero,
      image: `${BASE_URL}/images/${hero.image}`,
    })),
  };
}
