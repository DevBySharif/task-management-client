import Banner from "../Components/Banner";
import { Navbar } from "../Components/Navbar";
import Home from "../Pages/Home/Home";

const Mainlayout = () => {
  const background = {
    background: `url(/src/assets/background.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <div>
      <div style={background}>
        <div className="relative z-10 max-w-7xl mx-auto">
          <Navbar></Navbar>
          <Banner></Banner>
        </div>
      </div>
      <Home></Home>
    </div>
  );
};

export default Mainlayout;
