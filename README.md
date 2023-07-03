# Cinepedia - Movie App

Cinepedia is a movie application built using React, TypeScript, Tailwind CSS, and the TMDB API. It allows users to discover information about movies, search for specific titles, and view details such as ratings, release dates, and cast members.

## Features

- **Movie Search**: Users can search for movies by title or keyword.
- **Movie Details**: Detailed information about each movie, including ratings, release dates, overview, and cast members.
- **Popular Movies**: Display a list of popular movies currently trending.
- **Upcoming Movies**: Display a list of upcoming movies.
- **Top Rated Movies**: Display a list of top-rated movies.
- **Genre Filtering**: Users can filter movies by genre.
- **Favorites**: Users can mark movies as favorites and save them for future reference.
- **Responsive Design**: The app is responsive and works well on different screen sizes.
- **Swiper**: Integrated Swiper library for displaying movie carousels and slides.

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/Kuroe27/CinePedia.git
   ```

2. Install the dependencies:

   ```
   cd CinePedia
   npm install
   ```

3. Get an API key from [TMDB](https://www.themoviedb.org/) by creating an account.

4. Create a `.env` file in the root directory of the project and add your TMDB API key:

   ```
   VITE_API_KEY=your_api_key
   ```

5. Start the development server:

   ```
   npm run dev
   ```

   This will start the app on `http://localhost:3000`.

## Configuration

You can customize certain aspects of the app by modifying the following files:

- **`src/config.ts`**: Contains the configuration options for the TMDB API, such as base URL and endpoints.
- **`src/styles`**: Contains the styling files for the app. You can modify the Tailwind CSS or add additional styles as needed.

## Dependencies

Cinepedia relies on the following dependencies:

- React: JavaScript library for building user interfaces.
- TypeScript: Static typing for JavaScript.
- React Router: Routing library for navigation.
- Axios: Promise-based HTTP client for making API requests.
- React Icons: Icon library for using popular icon sets.
- Tailwind CSS: Utility-first CSS framework.
- Swiper: Library for creating touch-enabled carousels and sliders.
- Vite: Fast development server and build tool for modern web applications.

## Credits

Cinepedia makes use of the following resources:

- [TMDB API](https://www.themoviedb.org/documentation/api): The Movie Database API for movie information.
- [React](https://reactjs.org/): JavaScript library for building user interfaces.
- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript.
- [React Router](https://reactrouter.com/): Declarative routing for React.
- [Axios](https://axios-http.com/): Promise-based HTTP client for making API requests.
- [React Icons](https://react-icons.github.io/react-icons/): Icon library for React.
- [Tailwind CSS](https://tailwindcss.com/): Utility-first CSS framework.
- [Swiper](https://swiperjs.com/): Touch-enabled library for creating carousels and sliders.
- [Vite](https://vitejs.dev/): Fast development server and build tool for modern web applications.

