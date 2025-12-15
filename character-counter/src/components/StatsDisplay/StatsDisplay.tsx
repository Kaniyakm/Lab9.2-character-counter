import React from "react";
import type { StatsDisplayProps } from "../../types";
/**
 * STATS DISPLAY COMPONENT
 * -----------------------
 * STEP 1: Basic structure created.
 * STEP 3: Displays real-time stats.
 * STEP 6: UI polish added (card layout, spacing, typography).
 */

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div className="mt-6 p-4 bg-white shadow-sm rounded-xl border border-gray-200 space-y-2">
      <p className="text-gray-700">
        <span className="font-semibold">Characters:</span> {stats.characterCount}
      </p>

      <p className="text-gray-700">
        <span className="font-semibold">Words:</span> {stats.wordCount}
      </p>

      {showReadingTime && (
        <p className="text-gray-700">
          <span className="font-semibold">Reading Time:</span>{" "}
          {stats.readingTime.toFixed(2)} min
        </p>
      )}
    </div>
  );
};