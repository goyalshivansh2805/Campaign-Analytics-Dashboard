"use client";
import { useEffect, useState } from "react";
import { Campaign } from "./types/index";
import { fetchCampaigns } from "./lib/api";
import FilterDropdown from "./components/FilterDropdown";
import CampaignTable from "./components/CampaignTable";

export default function Home() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [filter, setFilter] = useState<"All" | "Active" | "Paused">("All");

  useEffect(() => {
    fetchCampaigns().then(setCampaigns).catch(console.error);
  }, []);

  const filtered = filter === "All" ? campaigns : campaigns.filter(c => c.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">📊 Marketing Campaigns</h1>
        <FilterDropdown filter={filter} onChange={setFilter} />
        <CampaignTable data={filtered} />
      </div>
    </div>
  );
}
