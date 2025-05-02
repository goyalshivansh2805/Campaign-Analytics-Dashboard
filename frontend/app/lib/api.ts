import { Campaign } from "../types";

export async function fetchCampaigns(): Promise<Campaign[]> {
  const res = await fetch("http://localhost:8000/campaigns");
  if (!res.ok) throw new Error("Failed to fetch campaigns");
  return res.json();
}
