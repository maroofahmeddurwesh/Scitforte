# Scitforte — Pioneering Tomorrow's Solutions

Scitforte is a premium, high-performance web application designed for a modern IT services and software products company. Built with a focus on rich aesthetics, smooth animations, and a production-ready architectural structure.

## 🚀 Features

- **Modern UI/UX**: Dark-themed, glassmorphic design with a premium aesthetic.
- **Dynamic Animations**: Powered by **Framer Motion** for smooth transitions and interactive elements.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing.
- **Interactive Contact Form**: Includes real-time validation, error handling, and success notifications.
- **WhatsApp Integration**: Direct one-click contact integration via WhatsApp across the site.
- **Modular Architecture**: Clean separation of components, pages, and layouts.
- **Performance Optimized**: Migrated to **Vite** for lightning-fast development and build times.

## 🛠️ Technology Stack

- **Frontend**: React (Hooks, Context API)
- **Styling**: Tailwind CSS (with custom design tokens)
- **Animations**: Framer Motion, React Slick
- **Build Tool**: Vite
- **Icons**: React Icons (Fa, Hi, Ri, etc.)

## 📂 Project Structure

The project is organized within the `frontend` directory:

```text
frontend/
├── src/
│   ├── assets/        # Images, Videos, and global styles
│   ├── components/    # Reusable UI components (Navbar, Footer, etc.)
│   ├── layout/        # Application shell and routing setup
│   ├── pages/         # Individual page views (Home, About, Contact, Services, etc.)
│   ├── App.jsx        # Root application component
│   └── index.jsx      # Entry point
├── public/            # Static assets (Favicon, Logo, PWA manifest)
├── tailwind.config.js # Tailwind CSS configuration
└── vite.config.js     # Vite configuration
```

## ⚙️ Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+) and **npm** installed on your system.

### Installation & Development

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

## 📝 Recent Updates

- **CRA to Vite Migration**: Successfully transitioned the entire codebase from Create React App to Vite for better performance.
- **WhatsApp Connectivity**: Replaced standard phone links with direct WhatsApp chat links (`wa.me`) in the Footer and Contact page.
- **Form Validation**: Implemented robust validation logic for the Contact Us form (Email regex, Phone format, Message length).
- **Code Cleanup**: Removed legacy CRA boilerplate files and redundant CSS files.
- **Directory Organization**: Consolidated all frontend code into a dedicated `frontend` folder for better project management.

---

© 2025 Scitforte. All rights reserved.
