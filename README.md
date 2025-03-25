# Restaurant_Reservation_Web
A responsive restaurant reservation and review SPA built with React and Vite.

## 📌 Project Overview
Yan's Feast is a fully responsive web application that allows users to browse dishes, make reservations, leave reviews, and join the membership. Built with React and modular components, the site emphasizes usability, accessibility, and user experience across devices.

## ✨ Features
- 🧾 **Dish Reservation System**: Select dishes, fill in reservation forms, calculate total price & tax, and confirm via modal.
- 📂 **Collapsible Menu Sections**: Filter and browse menu items by category using an expandable interface.
- 🗣️ **User Reviews**: View and sort user reviews by rating with clean visual layouts.
- 📝 **Membership Join Form**: Input validation, error handling, and post-submission confirmation page.
- 🎨 **Theme Toggle**: Switch between light and dark modes.
- 📱 **Responsive Design**: Fully adaptive layout with mobile-friendly navigation and ARIA accessibility support.

## 💡 Tech Stack
- **Frontend**: React + Vite
- **Styling**: CSS Modules (per-component styling)
- **State Management**: React Hooks (`useState`)
- **UI Libraries**: Custom-built components, native HTML/CSS (no UI library)
- **Assets**: Icons from Google Fonts & CSS.gg, images from Unsplash

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
git clone https://github.com/your-username/restaurant-reservation-app.git
cd restaurant-reservation-app
npm install

### Run Locally
npm run dev
Then open http://localhost:3000 in your browser.

##Project Structure
├── public/                  # Static assets
├── src/
│   ├── Components/          # All reusable components
│   ├── App.jsx              # Root component
│   ├── main.jsx             # Entry point
├── index.html               # Root HTML
├── .gitignore
├── package.json
├── vite.config.js

##License
This project is licensed under the MIT License.
Icons and images are sourced from Google Fonts, CSS.gg, and Unsplash under their respective open licenses. See licenses.txt for full attribution.
