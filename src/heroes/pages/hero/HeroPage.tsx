import { useParams } from "react-router";

export function HeroPage() {
  const { slug = "" } = useParams();

  return (
    <div>
      <h1>Hero Page {slug}</h1>
    </div>
  );
}
