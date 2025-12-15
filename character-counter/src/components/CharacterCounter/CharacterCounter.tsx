import React, { useState } from "react";
import { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

/**
 * CHARACTER COUNTER COMPONENT
 * ---------------------------
 * STEP 1: Component shell created.
 * STEP 2: Added text state + onChange handler.
 * STEP 3: Added real-time statistics calculation.
 * STEP 4: Added progress bar + color-coded feedback.
 * STEP 6: UI polish for spacing, layout, and typography.
 */

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 200,
  targetReadingTime = 1,
}) => {
  // STEP 2: Manage text state
  const [text, setText] = useState("");

  // STEP 3: Calculate stats based on current text
  const calculateStats = (input: string): TextStats => {
    const words = input.trim().split(/\s+/).filter(Boolean);
    const wordCount = words.length;
    const characterCount = input.length;
    const readingTime = wordCount / 200; // 200 WPM baseline

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  const stats = calculateStats(text);

  // STEP 4: Progress bar logic
  const progress = Math.min((stats.wordCount / maxWords) * 100, 100);

  // STEP 4: Color-coded progress bar
  const getProgressColor = () => {
    if (stats.wordCount < minWords) return "bg-red-500";
    if (stats.wordCount >= maxWords) return "bg-green-500";
    return "bg-blue-500";
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {/* STEP 2: Controlled input */}
      <TextInput onTextChange={setText} />

      {/* STEP 3: Display calculated stats */}
      <StatsDisplay stats={stats} showReadingTime />

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
      </div>
    </div>
  );
};
