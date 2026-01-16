# React Movie Explorer

A modern, responsive movie database app built with React, Vite, and Tailwind CSS. Search, browse trending movies, and view detailed info using the TMDB API.

![React](https://img.shields.io/badge/React-19.2.0-61DAFB?logo=react)
![Vite](https://img.shields.io/badge/Vite-7.2.4-646CFF?logo=vite)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC?logo=tailwind-css)
![TMDB](https://img.shields.io/badge/TMDB_API-v3-01B4E4?logo=themoviedatabase)

## ✨ Features

- 🎬 **Trending Movies** – Browse the latest trending movies from TMDB
- 🔍 **Search** – Find movies by title with instant results
- 📄 **Movie Details** – View posters, genres, ratings, release date, and overview
- 🧭 **Multi-Page Routing** – Seamless navigation with React Router
- 📱 **Responsive Design** – Looks great on mobile, tablet, and desktop
- ⏳ **Loading & Error States** – User-friendly feedback for API calls
- 🏷️ **Genre Tags** – See movie genres at a glance
- 🏠 **Floating Navbar** – Modern, shadcn-inspired navigation

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/react-movie-explorer.git
   cd react-movie-explorer
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your TMDB API key:

   ```env
   VITE_TMDB_API_KEY=your_tmdb_api_key_here
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Build for production     |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

## 🛠️ Built With

- **[React](https://react.dev/)** – UI library
- **[Vite](https://vitejs.dev/)** – Build tool and dev server
- **[Tailwind CSS](https://tailwindcss.com/)** – Utility-first CSS framework
- **[Font Awesome](https://fontawesome.com/)** – Icons
- **[TMDB API](https://developer.themoviedb.org/docs)** – Movie data

## 📁 Project Structure

```
react-movie-explorer/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   └── NavBar.jsx           # Floating navigation bar
│   ├── pages/
│   │   ├── Home.jsx             # Trending movies grid
│   │   ├── Search.jsx           # Search page
│   │   └── MovieDetail.jsx      # Movie detail view
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── eslint.config.js
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
