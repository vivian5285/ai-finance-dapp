import React from "react";
import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          欢迎来到 AI Finance DApp!
        </h1>
        <p className="text-center text-gray-600 mt-4">
          智能投资，让财富增长更轻松！
        </p>
        <Dashboard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
