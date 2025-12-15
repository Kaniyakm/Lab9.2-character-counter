# Character Counter Application

This project is an interactive character and word counter built with React + TypeScript. It provides real-time feedback on text input, including character count, word count, reading time, and a progress bar that helps users meet writing goals.

---

## Features

- Real-time character and word counting  
- Reading time estimation (200 WPM baseline)  
- Progress bar with color-coded feedback  
- Clean, responsive UI using Tailwind CSS  
- Fully typed with TypeScript  
- Modular, reusable components  

---

## Project Structure
---
src/
  App.tsx
  main.tsx
  index.css

  components/
    TextInput/
      TextInput.tsx
    StatsDisplay/
      StatsDisplay.tsx
    CharacterCounter/
      CharacterCounter.tsx

  types/
    index.ts
## Components

### **TextInput**
A controlled textarea component that sends text updates to its parent.

### **StatsDisplay**
Displays character count, word count, and reading time.

### **CharacterCounter**
Manages state, calculates statistics, and renders the full UI.

### Reflection Questions
1. How did you handle state updates when the text changed?
State updates were handled using a controlled component pattern inside TextInput, where the textarea value is stored in local state. A useEffect hook notifies the parent component (CharacterCounter) whenever the text changes. This ensures the parent always has the latest text and can recalculate statistics in real time.
2. What considerations did you make when calculating reading time?
Reading time is calculated using a standard reading speed of 200 words per minute. The calculation filters out empty word entries and handles edge cases such as extra spaces or empty input to ensure accuracy.
3. How did you ensure the UI remained responsive during rapid text input?
The statistics calculations are lightweight and run efficiently on each keystroke. Because the operations involve simple string splitting and length checks, they execute quickly ven with large text inputs. React’s rendering optimizations ensure the UI updates smoothly without lag.
4. What challenges did you face when implementing the statistics calculations?
Challenges included handling edge cases in word counting, ensuring accurate reading time, and designing a progress bar that clearly communicates writing goals. Maintaining clean code while keeping the UI responsive required careful structuring and testing.

Installation and Setup
Install dependencies:
npm install


Run the development server:
npm run dev



Technologies Used
- React
- TypeScript
- Tailwind CSS
- Vite

###License
This project was created for educational purposes as part of the Per Scholas React training program.




