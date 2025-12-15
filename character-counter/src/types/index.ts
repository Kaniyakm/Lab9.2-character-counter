/**
 * STEP 1: Define all shared types
 * -------------------------------
 * These interfaces ensure strong typing across components.
 * More fields may be added later as features expand.
 */

// Props for TextInput component
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

// Stats object used by StatsDisplay + CharacterCounter
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

// Props for StatsDisplay component
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

// Props for CharacterCounter component
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}
