import type { ReactNode } from "react";
import Sidebar from "../components/sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({
  children,
}: MainLayoutProps) {
  return (
    <div className="layout">
      <Sidebar />

      <main className="content">
        {children}
      </main>
    </div>
  );
}