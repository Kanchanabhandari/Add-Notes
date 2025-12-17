📝 Add Notes – React Notes Application
A simple and clean Notes Application built using React that allows users to create, view, and delete notes in real time. The app provides an intuitive UI for managing daily notes efficiently.

🚀 Features

➕ Add notes with title and details
🗑️ Delete notes instantly
⚡ Real-time state updates using React Hooks
📱 Responsive layout for desktop screens
🎨 Clean UI using Tailwind CSS
🧠 Beginner-friendly React logic

🛠️ Tech Stack
React.js
JavaScript (ES6)
Tailwind CSS
Vite (for fast development setup)

📂 Project Structure
Add-Notes/
│
├── src/
│   ├── App.jsx
│   ├── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

⚙️ How It Works
The app uses useState to manage:
 - Note title
 - Note details
 - List of notes

On form submission:
  - A new note object is added to the notes array

Each note is displayed as a card
Clicking Delete removes the selected note from the list

This logic is implemented inside the main App.jsx component 

App
▶️ Getting Started
1️⃣ Clone the repository
git clone https://github.com/Kanchanabhandari/Add-Notes.git

2️⃣ Navigate to project folder
cd Add-Notes

3️⃣ Install dependencies
npm install

4️⃣ Run the project
npm run dev


The app will run at:
http://localhost:5173

📸 UI Overview
Left section: Add new notes
Right section: View recent notes
Each note is displayed in a sticky-note style card

🎯 Learning Outcomes
Understanding React state management
Handling forms and events in React
Working with arrays in state
Building reusable UI with JSX
Using Tailwind CSS for styling

🔮 Future Improvements
Edit notes feature
Save notes to local storage
Search functionality

Mobile responsiveness

Dark / Light mode toggle
