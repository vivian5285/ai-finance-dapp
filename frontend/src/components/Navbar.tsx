import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-lg text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">AI Finance DApp 🚀</h1>
        <ul className="flex space-x-4">
          <li><Link to="/">首页</Link></li>
          <li><Link to="/invest">投资</Link></li>
          <li><Link to="/profile">个人中心</Link></li>
          <li><Link to="/market">市场</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
