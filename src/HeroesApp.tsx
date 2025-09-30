import { RouterProvider } from "react-router";
import { router } from "./router/app-router";

export function HeroesApp() {
  return <RouterProvider router={router} />;
}
