type Props = {
    filter: "All" | "Active" | "Paused";
    onChange: (value: "All" | "Active" | "Paused") => void;
  };
  
  export default function FilterDropdown({ filter, onChange }: Props) {
    return (
      <div className="mb-4 flex items-center gap-2">
        <label className="text-gray-600 font-medium">Filter:</label>
        <select
          value={filter}
          onChange={(e) => onChange(e.target.value as any)}
          className="px-3 py-2 rounded border border-gray-300 bg-white shadow-sm focus:ring focus:ring-blue-200 text-black"
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Paused">Paused</option>
        </select>
      </div>
    );
  }
  