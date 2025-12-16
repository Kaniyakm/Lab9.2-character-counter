/**
 * CharacterCounter.tsx
 * -------------------
 * Purpose:
 * - Collect text input
 * - Calculate stats (characters, words, reading time)
 * - Show stats + progress bar with feedback
 *
 * NOTE (Blank page fix):
 * - Always import types using a RELATIVE path like "../../types"
 * - Avoid "/src/types" unless you set a Vite alias in vite.config.ts
 */

import { useMemo, useState } from "react"; // ✅ no need to import React in modern React
import type { CharacterCounterProps, TextStats } from "../../types"; // ✅ type-only import is cleaner
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

/**
 * STEP 1: Component shell created.
 * STEP 2: Added text state + onChange handler.
 * STEP 3: Added real-time statistics calculation.
 * STEP 4: Added progress bar + color-coded feedback.
 * STEP 6: UI polish for spacing, layout, and typography.
 */

export const CharacterCounter = ({
  // NOTE: Default props prevent undefined values from breaking UI/logic
  minWords = 0,
  maxWords = 200,
  targetReadingTime = 1, // NOTE: currently not used in UI; keep for future feature
}: CharacterCounterProps) => {
  // STEP 2: Manage text state (controlled input pattern)
  const [text, setText] = useState("");

  // STEP 3: Stats calculation function (pure function)
  const calculateStats = (input: string): TextStats => {
    // NOTE: trim + split + filter(Boolean) avoids counting extra spaces as words
    const words = input.trim().split(/\s+/).filter(Boolean);

    const wordCount = words.length;
    const characterCount = input.length;

    // NOTE: reading time estimate based on 200 WPM baseline
    const readingTime = wordCount / 200;

    return { characterCount, wordCount, readingTime };
  };

  // NOTE: useMemo avoids recalculating stats unless `text` changes
  const stats = useMemo(() => calculateStats(text), [text]);

  // STEP 4: Progress bar logic
  // NOTE: Guard against maxWords = 0 to avoid divide-by-zero
  const progress = useMemo(() => {
    if (!maxWords) return 0;
    return Math.min((stats.wordCount / maxWords) * 100, 100);
  }, [stats.wordCount, maxWords]);

  // STEP 4: Color-coded progress bar
  const getProgressColor = () => {
    if (stats.wordCount < minWords) return "bg-red-500";
    if (stats.wordCount >= maxWords) return "bg-green-500";
    return "bg-blue-500";
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* STEP 2: Controlled input (TextInput calls onTextChange with new text) */}
      <TextInput onTextChange={setText} />

      {/* STEP 3: Display calculated stats */}
      <StatsDisplay stats={stats} showReadingTime />
      <p className="text-sm text-gray-500">
        Target reading time: {targetReadingTime} minute
                {targetReadingTime !== 1 && "s"}
      </p>

      {/* STEP 4: Word goal + progress bar */}
      <div className="space-y-3">
        <p className="font-semibold text-gray-800">
          Word Goal: {stats.wordCount}/{maxWords}
        </p>

        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${getProgressColor()}`}
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* STEP 4: Feedback messages */}
        <p className="text-sm">
          {stats.wordCount < minWords && (
            <span className="text-red-600">
              You need {minWords - stats.wordCount} more words to reach the minimum.
            </span>
          )}

          {stats.wordCount >= minWords && stats.wordCount < maxWords && (
            <span className="text-blue-600">You're making great progress.</span>
          )}

          {stats.wordCount >= maxWords && (
            <span className="text-green-600">You've reached your goal!</span>
          )}
        </p>

        {/* NOTE: targetReadingTime is available for future UI (optional) */}
        {/* <p className="text-xs text-gray-500">Target: {targetReadingTime} minute(s)</p> */}
      </div>
    </div>
  );
};
