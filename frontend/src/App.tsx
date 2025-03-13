import React from "react";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">🚀 欢迎来到 AI Finance DApp!</h1>
      <p className="mt-4 text-gray-700">智能投资，让财富增长更轻松！</p>
    </div>
  );
}

export default App;
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
