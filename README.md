# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Character Counter (React + TypeScript + Vite)

An interactive character counter application built with **React**, **TypeScript**, and **Vite**. Users can type into a text area and see real-time statistics including **character count**, **word count**, and **estimated reading time**. The UI also includes a **progress indicator** for word goals.

## Workplace Context

In a content management system (CMS), content writers often need immediate feedback while drafting articles. This component helps writers stay on track by showing live stats (characters, words, reading time) and goal progress (min/max words).

---

## Objectives Met

This project demonstrates:

- **State management** using `useState`
- **Event handling** with controlled user input updates
- **UI updates based on state** (real-time statistics)
- **Callback pattern** for component communication (`TextInput` → parent)
- **Responsive, user-friendly UI** (Tailwind CSS)
- **Strong typing** with shared TypeScript interfaces

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS (utility-based styling)

---

## Project Setup

### Create the Vite project
```bash
npm create vite@latest character-counter -- --template react-ts
cd character-counter
npm install
npm run dev

## Folder Structure
src/
  components/
    TextInput/
      TextInput.tsx
    StatsDisplay/
      StatsDisplay.tsx
    CharacterCounter/
      CharacterCounter.tsx
  types/
    index.ts
  App.tsx
  main.tsx
  index.css

Reflection Questions (Answers)
1) How did you handle state updates when the text changed?

I used the useState hook inside CharacterCounter to store the current text. The TextInput component calls the onTextChange callback whenever the textarea value changes. That callback updates the parent state (setText), which triggers a re-render and updates the stats immediately. This follows the callback pattern to move data from child to parent in a typed, predictable way.

2) What considerations did you make when calculating reading time?

I used a common baseline of 200 words per minute (WPM). Reading time is calculated as wordCount / 200. I also accounted for text edge cases (empty strings and extra spaces) by trimming the text and filtering out empty entries so the reading time estimate doesn’t inflate due to whitespace.

3) How did you ensure the UI remained responsive during rapid text input?

The UI stays responsive because the calculations are lightweight (string length + word split). The app uses


# Component Documentation
1) TextInput

Purpose: Captures user text input and sends updates to the parent using a callback.

Props:

onTextChange: (text: string) => void (required)

placeholder?: string

initialValue?: string

Example:

<TextInput onTextChange={setText} placeholder="Start typing..." />

2) StatsDisplay

Purpose: Displays stats (characters, words, and optional reading time).

Props:

stats: TextStats (required)

showReadingTime?: boolean

Example:

<StatsDisplay stats={stats} showReadingTime />

3) CharacterCounter

Purpose: Parent component that connects TextInput and StatsDisplay. Manages text state and calculates statistics in real-time. Includes word-goal progress UI.

Props:

minWords?: number (default: 0)

maxWords?: number (default: 200)

targetReadingTime?: number (default: 1)

Example:

<CharacterCounter minWords={25} maxWords={100} targetReadingTime={2} />

Example Usage (App Integration)
src/App.tsx
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

export default function App() {
  return (
    <main className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6 text-center">Character Counter</h1>

      <CharacterCounter
        minWords={25}
        maxWords={100}
        targetReadingTime={2}
      />
    </main>
  );
}

