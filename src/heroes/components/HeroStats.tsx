import { Badge } from "@/components/ui/badge";
import { Users, Zap } from "lucide-react";
import HeroStatCard from "./HeroStatCard";
import { useHeroSummary } from "../hooks/useHeroSummary";

export default function HeroStats() {
  const { data: summaryInfo } = useHeroSummary();

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <HeroStatCard
        title="Total Characters"
        icon={<Users className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-2xl font-bold">{summaryInfo?.totalHeroes}</div>
        <div className="flex gap-1 mt-2">
          <Badge variant="secondary" className="text-xs">
            {summaryInfo?.heroCount} Heroes
          </Badge>
          <Badge variant="destructive" className="text-xs">
            {summaryInfo?.villainCount} Villains
          </Badge>
        </div>
      </HeroStatCard>

      <HeroStatCard
        title="Favorites"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">Superman</div>
        <p className="text-xs text-muted-foreground">Strength: 10/10</p>
      </HeroStatCard>

      <HeroStatCard
        title="Strongest"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">
          {summaryInfo?.strongestHero.alias}
        </div>
        <p className="text-xs text-muted-foreground">
          Strength: {summaryInfo?.strongestHero.strength}/100
        </p>
      </HeroStatCard>

      <HeroStatCard
        title="Intelligence"
        icon={<Zap className="h-4 w-4 text-muted-foreground" />}
      >
        <div className="text-lg font-bold">
          {summaryInfo?.smartestHero.alias}
        </div>
        <p className="text-xs text-muted-foreground">
          Strength: {summaryInfo?.smartestHero.strength}/10
        </p>
      </HeroStatCard>
    </div>
  );
}
