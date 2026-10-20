import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { MapDirections } from "./MapDirections";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div id="top">
      <Header />
      <main>{children}</main>
      <MapDirections />
      <Footer />
      <FloatingActions />
    </div>
  );
}
