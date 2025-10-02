import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustonJumbotron from "@/components/custom/CustonJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import { useMemo } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { useSearchParams } from "react-router";
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary";
import { usePaginateHero } from "@/heroes/hooks/usePaginateHero";

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = searchParams.get("page") || "1";
  const limit = searchParams.get("limit") || "6";
  const tab = searchParams.get("tab") || "all";
  const category = searchParams.get("category") || "all";

  const { data: heroesResponse } = usePaginateHero({ page, limit, category });

  const { data: summaryInfo } = useHeroSummary();

  const selectedTab = useMemo(() => {
    const validTabs = ["all", "favorites", "heroes", "villains"];
    return validTabs.includes(tab) ? tab : "all";
  }, [tab]);

  const handleTabChange = (tab: string) => {
    setSearchParams((prev) => {
      prev.set("tab", tab);
      if (tab === "all") {
        prev.set("category", "all");
        prev.set("page", "1");
      }
      if (tab === "heroes") {
        prev.set("category", "hero");
        prev.set("page", "1");
      }
      if (tab === "villains") {
        prev.set("category", "villain");
        prev.set("page", "1");
      }
      if (tab === "favorites") {
        prev.set("category", "favorite");
      }
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
          <TabsTrigger value="all">
            All Characters ({summaryInfo?.totalHeroes})
          </TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes">
            Heroes ({summaryInfo?.heroCount})
          </TabsTrigger>
          <TabsTrigger value="villains">
            Villains ({summaryInfo?.villainCount})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="favorites"></TabsContent>
        <TabsContent value="heroes">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid heroes={heroesResponse?.heroes ?? []} />
        </TabsContent>
      </Tabs>

      <CustomPagination totalPages={heroesResponse?.pages ?? 1} />
    </>
  );
}
