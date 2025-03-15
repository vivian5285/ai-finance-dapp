import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Market from "./pages/Market";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <div style={styles.navbar}>
        <Link to="/" style={styles.link}>🏠 Home</Link>
        <Link to="/invest" style={styles.link}>💰 Invest</Link>
        <Link to="/market" style={styles.link}>📈 Market</Link>
        <Link to="/profile" style={styles.link}>👤 Profile</Link>
      </div>

      <div style={styles.container}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/market" element={<Market />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    padding: "10px",
    backgroundColor: "#282c34",
  },
  link: {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "18px",
  },
  container: {
    textAlign: "center",
    padding: "20px",
  },
};

export default App;
