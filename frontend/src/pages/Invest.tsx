import Navbar from "../components/Navbar";
import Investment from "../components/Investment";
import Footer from "../components/Footer";

const Invest = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6">
        <Investment />
      </div>
      <Footer />
    </>
  );
};

export default Invest;
