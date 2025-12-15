import React, { useState } from "react";
import { CharacterCounterProps, TextStats } from "../../types";
import { TextInput } from "../TextInput/TextInput";
import { StatsDisplay } from "../StatsDisplay/StatsDisplay";

/**
 * STEP 1: Component shell
 * ------------------------
 * This component:
 * - Will manage text state
 * - Will calculate stats (in later steps)
 * - Will pass data to TextInput + StatsDisplay
 *
 * For now, we only set up the structure and placeholder logic.
 */

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 200,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState("");

  // Placeholder stats until we implement real calculations
  const placeholderStats: TextStats = {
    characterCount: text.length,
    wordCount: text.trim() ? text.trim().split(/\s+/).length : 0,
    readingTime: 0,
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Text input component */}
      <TextInput onTextChange={setText} />

      {/* Stats display component */}
      <StatsDisplay stats={placeholderStats} showReadingTime />
    </div>
  );
};

 * STEP 2:
 * - Manage text state here
 * - Pass setText to TextInput
 * - Display placeholder stats for now
 */

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 200,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState("");

  // Placeholder stats until Step 3
  const placeholderStats: TextStats = {
    characterCount: text.length,
    wordCount: text.trim() ? text.trim().split(/\s+/).length : 0,
    readingTime: 0,
  };

  return (
    <div className="max-w-xl mx-auto">
      {/* Text input updates text state */}
      <TextInput onTextChange={setText} />

      {/* StatsDisplay receives placeholder stats */}
      <StatsDisplay stats={placeholderStats} showReadingTime />
    </div>
  );
};

/**
 * STEP 3:
 * Add real-time statistics calculation.
 *
 * This includes:
 * - Character count
 * - Word count
 * - Estimated reading time (200 WPM baseline)
 *
 * Stats update automatically whenever the user types.
 */

export const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = 200,
  targetReadingTime = 1,
}) => {
  const [text, setText] = useState("");

  /**
   * Calculate statistics based on the current text.
   * This function runs every time the user types.
   */
  const calculateStats = (input: string): TextStats => {
    // Split words safely (handles multiple spaces)
    const words = input.trim().split(/\s+/).filter(Boolean);

    const wordCount = words.length;
    const characterCount = input.length;

    // Reading time formula: words / 200 words per minute
    const readingTime = wordCount / 200;

    return {
      characterCount,
      wordCount,
      readingTime,
    };
  };

  // Compute stats in real time
  const stats = calculateStats(text);

  return (
    <div className="max-w-xl mx-auto">
      {/* Text input updates text state */}
      <TextInput onTextChange={setText} />

      {/* StatsDisplay now receives REAL stats */}
      <StatsDisplay stats={stats} showReadingTime />
    </div>
  );
};

