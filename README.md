# LOWKEY - Curated Mood Playlists

An elegant, dark-themed music lounge web application designed for modern desktop and mobile browsers. LOWKEY streamlines user discovery by organizing audio streams directly around emotional profiles: Chill, Energetic, Ambient, and Melancholic.

## 🚀 Live Production Deployment
The interface is fully compiled, optimized, and hosted live at:  
https://lowkey-rl7qoxjiq-maroun-issa-s-projects.vercel.app/

---

## ✨ System Architecture & Key Features
- **Centralized Data Layer:** Governed by a single source of truth (`tracksData.js`) managing active track attributes, unique identification keys, relative image assets, and audio resource endpoints.
- **Persistent Global Audio Player:** Retains full continuous audio streaming capabilities across all view routers without audio cuts or playback resets.
- **Advanced UI/UX Customization:** High-fidelity glassmorphism elements, custom gradient accents, and dynamic tracking active highlights styled via atomic Tailwind CSS utilities.
- **Fluid Multi-Device Responsiveness:** Engineered using a mobile-first philosophy, utilizing responsive grid configurations (`grid-cols-1 sm:grid-cols-2 md:grid-cols-4`) to transition from single-column lists on small viewports to expansive rows on ultra-wide desktop monitors.

---

## 🛠️ Technology Stack
- **Frontend Core:** ReactJS (Vite Engine)
- **Routing Infrastructure:** React Router DOM (Single Page Application Model)
- **Styling Architecture:** Tailwind CSS Utilities
- **Component Icons Assembly:** React Icons
- **Deployment Platform:** Vercel Continuous Deployment Matrix

---

## 💻 Local Workspace Installation & Setup Instructions

Follow these simple structural commands to set up the environment and execute the application locally:

1. **Clone the Source Repository:**
   ```bash
   git clone [https://github.com/scott-pilgrim-lab/lowkey.git](https://github.com/scott-pilgrim-lab/lowkey.git)
