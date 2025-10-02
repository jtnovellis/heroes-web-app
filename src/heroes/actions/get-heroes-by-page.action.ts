import heroesApi from "../api/heroes.api";
import type { HeroResponse } from "../types/get-heroes.response";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function getHeroesByPage(
  page: number,
  limit: number = 6,
  category: string,
): Promise<HeroResponse> {
  if (isNaN(page)) {
    page = 1;
  }
  if (isNaN(limit)) {
    limit = 6;
  }

  const { data } = await heroesApi.get<HeroResponse>("/", {
    params: {
      limit,
      offset: (page - 1) * limit,
      category,
    },
  });

  return {
    ...data,
    heroes: data.heroes.map((hero) => ({
      ...hero,
      image: `${BASE_URL}/images/${hero.image}`,
    })),
  };
}
