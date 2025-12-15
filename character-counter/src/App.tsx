import React from "react";
import { CharacterCounter } from "./components/CharacterCounter/CharacterCounter";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <header className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Character Counter Tool
        </h1>
        <p className="text-gray-600 text-lg">
          Track your writing progress in real time with word count, character
          count, and reading time insights.
        </p>
      </header>

      <main className="max-w-2xl mx-auto">
        <CharacterCounter 
          minWords={50}
          maxWords={200}
          targetReadingTime={1}
        />
      </main>
    </div>
  );
}

export default App;