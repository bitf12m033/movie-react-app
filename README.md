# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Project Setup Instructions

### 1. Appwrite Setup
- Create new account in [Appwrite Cloud](https://cloud.appwrite.io)
- Project Link: [Console](https://cloud.appwrite.io/console/organization-6797af34001b1d8d1f27)
- Purpose: Permanent storage for trending movies and search results

### 2. Tailwind CSS Setup

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


### 3. TMDB API Integration
- Create account at [TMDB](https://www.themoviedb.org)
- Account Link: [Profile](https://www.themoviedb.org/u/bitf12m033)
- Create `.env.local` file in project root
- Add your TMDB API key to the `.env.local` file

### 4. Search Functionality
- Install react-use package:

npm install react-use
- Import debounce functionality: