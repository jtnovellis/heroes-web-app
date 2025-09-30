import HeroGridCard from "./HeroGridCard";

export default function HeroGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
      <HeroGridCard />
      <HeroGridCard />
      <HeroGridCard />
    </div>
  );
}
