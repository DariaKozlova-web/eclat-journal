# ÉCLAT Journal — Personal Diary Web App

ÉCLAT Journal is a modern, elegant, single-page diary application built with **React**, **Vite**, **TailwindCSS**, and **DaisyUI**.
The project focuses on clean UI/UX, smooth animations, theme customization, and a structured component-driven architecture.

---

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
- **DaisyUI with custom themes**
- **LocalStorage for theme persistence**
- **Custom React Hooks (`useEntries`, `useTheme`)**
- **CSS animations & transitions**

---

## 📁 Project Structure

```
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
```

---

## 🚀 How to Run Locally

### Clone the repository

```bash
git clone https://github.com/DariaKozlova-web/eclat-journal.git
```
### Install dependencies

```bash
cd eclat-journal
npm install
```
### Run development server

```bash
npm run dev
```
### Build for production

```bash
npm run build
```
---

## 📸 Screenshots

### 🌞 Light Theme
![Light Theme](https://raw.githubusercontent.com/DariaKozlova-web/eclat-journal/main/public/screen-shot-light.png)

### 🌙 Dark Theme
![Dark Theme](https://raw.githubusercontent.com/DariaKozlova-web/eclat-journal/main/public/screen-shot-dark.png)


---

## 📌 Notes

This project demonstrates:

- Version control workflow with branches & pull requests
- Clean React component architecture
- UI theming with DaisyUI
- State management with custom hooks
- LocalStorage persistence  

---

## 📄 License

MIT License — feel free to use or modify the project.
```
