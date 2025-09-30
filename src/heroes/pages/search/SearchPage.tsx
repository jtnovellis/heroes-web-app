import CustonJumbotron from "@/components/custom/CustonJumbotron";
import HeroStats from "@/heroes/components/HeroStats";
import SearchControls from "./ui/SearchControls";
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs";

export default function SearchPage() {
  return (
    <>
      <CustonJumbotron
        title="Search Superhero Universe"
        description="find, explore and admin super heroes"
      />
      <CustomBreadcrumbs
        currentPage="Superhero Universe Search"
        breadcrumbs={[{ label: "Search", to: "search" }]}
      />
      <HeroStats />
      <SearchControls />
      <h1>SearchPage</h1>
    </>
  );
}
