# ÉCLAT Journal — Personal Diary Web App

ÉCLAT Journal is a modern, elegant, single-page diary application built with **React**, **Vite**, **TailwindCSS**, and **DaisyUI**.
The project focuses on clean UI/UX, smooth animations, theme customization, and a structured component-driven architecture.

## ✨ Features

- 📝 Create, edit, and delete diary entries
- 🗂 Clean card-based layout for all entries
- 🌗 Custom light & dark themes with DaisyUI
- 💾 Persistent theme stored in LocalStorage
- 🎨 Custom design system and typography
- 📱 Fully responsive layout
- 🔧 Modular structure: components, hooks, global styles

---

## 🛠 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **DaisyUI** with custom themes
- **LocalStorage** for theme persistence
- **React Hooks** (custom hooks: `useEntries`, `useTheme`)
- **CSS animations & transitions**

---

## 📁 Project Structure

src/
├── components/
│ ├── Header.jsx
│ ├── Footer.jsx
│ ├── AddEntry.jsx
│ ├── EditEntry.jsx
│ ├── CardList.jsx
│ ├── CardDetails.jsx
│ ├── EmptyState.jsx
│ └── ModalWindow.jsx
│
├── hooks/
│ ├── useEntries.js
│ └── useTheme.js
│
├── assets/
│ └── images/logo.svg
│
├── App.jsx
├── index.css
└── main.jsx

yaml
Копіювати код

---

## 🚀 How to Run Locally

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/eclat-journal.git
cd eclat-journal
Install dependencies:

bash
Копіювати код
npm install
Run the development server:

bash
Копіювати код
npm run dev
🔧 Build for Production
bash
Копіювати код
npm run build
📸 Screenshots
![Home Page Light](public/screen-shot-light.png)
![Home Page Dark](public/screen-shot-dark.png)


📌 Notes
This project was developed as part of a web development module and demonstrates:

version control workflow with branches & pull requests

clean React component architecture

UI theming with DaisyUI

state management with custom hooks

📄 License
MIT License
Feel free to use, modify, or extend the project.
