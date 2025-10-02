import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CustonJumbotron from "@/components/custom/CustonJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import HeroGrid from "@/heroes/components/HeroGrid";
import { useState } from "react";
import CustomPagination from "@/components/custom/CustomPagination";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";
import { getHeroesByPage } from "@/heroes/actions/get-heroes-by-page.action";
import { useQuery } from "@tanstack/react-query";

export function HomePage() {
  const [activeTab, setActiveTab] = useState("all");
  const { data } = useQuery({
    queryKey: ["heroes"],
    queryFn: () => getHeroesByPage(),
    staleTime: 1000 * 60 * 5,
  });

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

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Characters (16)</TabsTrigger>
          <TabsTrigger value="favorites" className="flex items-center gap-2">
            Favorites (3)
          </TabsTrigger>
          <TabsTrigger value="heroes">Heroes (12)</TabsTrigger>
          <TabsTrigger value="villains">Villains (2)</TabsTrigger>
        </TabsList>

        <TabsContent value="all">
          <HeroGrid />
        </TabsContent>
        <TabsContent value="favorites">
          <HeroGrid />
        </TabsContent>
        <TabsContent value="heroes">
          <HeroGrid />
        </TabsContent>
        <TabsContent value="villains">
          <HeroGrid />
        </TabsContent>
      </Tabs>

      <CustomPagination totalPages={10} />
    </>
  );
}
