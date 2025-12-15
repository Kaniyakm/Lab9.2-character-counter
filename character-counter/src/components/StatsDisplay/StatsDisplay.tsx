import React from "react";
import { StatsDisplayProps } from "../../types";

/**
 * STEP 1: Basic stats display scaffold
 * ------------------------------------
 * This component:
 * - Receives calculated stats from parent
 * - Displays character count + word count
 * - Optionally shows reading time
 *
 * No styling or advanced UI yet — just structure.
 */

export const StatsDisplay: React.FC<StatsDisplayProps> = ({
  stats,
  showReadingTime = true,
}) => {
  return (
    <div className="mt-4">
      <p><strong>Characters:</strong> {stats.characterCount}</p>
      <p><strong>Words:</strong> {stats.wordCount}</p>

      {showReadingTime && (
        <p>
          <strong>Reading Time:</strong> {stats.readingTime.toFixed(2)} min
        </p>
      )}
    </div>
  );
};