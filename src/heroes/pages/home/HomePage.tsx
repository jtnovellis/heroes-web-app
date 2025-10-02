import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustonJumbotron from "@/components/custom/CustonJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import { useMemo } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: heroesResponse } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPage(),
    staleTime: 1000 * 60 * 5,
  });

  const tab = searchParams.get("tab") || "all";

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(tab) ? tab : "all";
  }, [tab]);

  const handleTabChange = (tab: string) => {
    setSearchParams((prev) => {
      prev.set("tab", tab);
      return prev;
    });
  };

  return (
    <>
      <CustonJumbotron
        title="Superhero Universe"
        description="find, explore and admin super heroes"
      />

      <CustomBreadcrumbs
        currentPage="Superhero Universe Home"
        breadcrumbs={[]}
      />

      <HeroStats />

      <Tabs
        value={selectedTab}
        onValueChange={(tab) => handleTabChange(tab)}
        className="mb-8"
      >
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Characters (16)</TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
          <TabsTrigger value="villains">Villains (2)</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites"></TabsContent>
        <TabsContent value="heroes"></TabsContent>
        <TabsContent value="villains"></TabsContent>
      </Tabs>

      <CustomPagination totalPages={10} />
    </>
  );
}
