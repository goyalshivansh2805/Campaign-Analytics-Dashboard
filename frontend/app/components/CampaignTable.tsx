import { Campaign } from "../types";

type Props = {
  data: Campaign[];
};

export default function CampaignTable({ data }: Props) {
  return (
    <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Campaign Name</th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Clicks</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Cost</th>
            <th className="px-6 py-3 text-right text-sm font-semibold text-gray-700">Impressions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data.map((c) => (
            <tr key={c.id} className="hover:bg-gray-50 transition-all">
              <td className="px-6 py-4 text-sm text-gray-800">{c.name}</td>
              <td className="px-6 py-4">
                <span
                  className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                    c.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {c.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-right text-gray-700">{c.clicks}</td>
              <td className="px-6 py-4 text-sm text-right text-gray-700">${c.cost.toFixed(2)}</td>
              <td className="px-6 py-4 text-sm text-right text-gray-700">{c.impressions}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {data.length === 0 && (
        <div className="p-6 text-center text-gray-500 text-sm">No campaigns found.</div>
      )}
    </div>
  );
}
