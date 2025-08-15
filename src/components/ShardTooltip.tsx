// src/components/ShardTooltip.tsx
// You would pass props like 'shardName' and 'description' to this component.

export default function ShardTooltip() {
  const shardName = "Brand Voice";
  const description = "Analyzes text and suggests edits to match your brand's unique tone.";

  return (
    // Tooltip container
    <div className="w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-4 text-sm text-white animate-fade-in-up">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-bold">{shardName}</h4>
        {/* Simple feedback icons */}
        <div className="flex gap-1">
          <button className="p-1 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">👍</button>
          <button className="p-1 rounded-full text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">👎</button>
        </div>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}