# Forever Store

A modern e-commerce web application built with React, featuring a clean UI, shopping cart, product collection, and more. This project was originally based on a tutorial by [GreatStackDev](https://www.youtube.com/@GreatStackDev), but has been significantly modified and extended.

## Demo

[Live Demo on Netlify](https://foreverstor.netlify.app/)

## Features

- Responsive design for desktop and mobile
- Product collection and detail pages
- Shopping cart with add/remove/update quantity
- Order placement and order history (under development)
- User authentication (login page) (under development)
- Toast notifications for user feedback
- State management using React's useReducer and Context API
- Tailwind CSS for styling

## Technologies Used

- React
- React Router
- Tailwind CSS
- React Toastify
- Vite

## Getting Started

### Prerequisites

- Node.js and npm installed

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd eCommerce
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Tailwind CSS (if not already set up):
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```
   _(Tailwind is already configured in this project, but see [Tailwind Docs](https://tailwindcss.com/docs/guides/vite) if you need to reconfigure.)_
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

- `src/` — Main source code
  - `components/` — Reusable UI components (Navbar, Footer, ProductItem, etc.)
  - `pages/` — Page components (Home, About, Contact, Collection, etc.)
  - `contexts/` — Context and reducer for state management
  - `assets/` — Images and static assets
- `public/` — Static files

## Credits

- Original tutorial by [GreatStackDev](https://www.youtube.com/@GreatStackDev)
- Modified and extended by Mohammed Morra

## Contact

- [LinkedIn](www.linkedin.com/in/mohammed-mostafa-morra-952668252)
- [Email](mailto:mohammedmorra1@gmail.com)

---

Feel free to fork, modify, and use this project for your own learning or e-commerce ideas!
