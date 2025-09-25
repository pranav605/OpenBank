import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="bg-neutral-900 p-0">
      <Header />  {/* Floating Header appears on every page */}
      <main>
        <Outlet /> {/* Matched route content appears here */}
      </main>
    </div>
  );
}
