import heroesApi from "../api/heroes.api";
import type { Hero } from "../types/hero.interface";

export async function getHero(slug: string): Promise<Hero> {
  const { data } = await heroesApi.get<Hero>(`/${slug}`);
  return {
    ...data,
    image: `${import.meta.env.VITE_API_URL}/images/${data.image}`,
  };
}
