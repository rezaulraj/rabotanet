import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-gradient-to-r from-red-400 via-pink-500 to-purple-500 text-white p-4">
      <h1 className="text-9xl font-extrabold mb-4 drop-shadow-lg">404</h1>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center">
        Page Not Found
      </h2>
      <p className="text-center text-lg md:text-xl mb-8 max-w-xl">
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-8 py-3 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
