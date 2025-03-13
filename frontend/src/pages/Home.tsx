import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center text-blue-600">
          🚀 欢迎来到 AI Finance DApp!
        </h1>
        <p className="text-center text-gray-600 mt-4">智能投资，让财富增长更轻松！</p>
        <Dashboard />
      </div>
      <Footer />
    </>
  );
};

export default Home;
import React from "react";
import Profile from "./pages/Profile";
import Market from "./pages/Market";

const Home: React.FC = () => {
  return (
    <div className="p-6 space-y-6">
      <Profile />
      <Market />
    </div>
  );
};

export default Home;

