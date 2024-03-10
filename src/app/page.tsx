import { Suspense } from "react";
import { Dashboard, Summary } from "./components";

export default async function Home() {
  return (
    <main className="flex flex-col lg:flex-row ">
      <Summary />
      <Dashboard />
    </main>
  );
}
