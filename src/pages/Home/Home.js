import React from "react";
import "./Home.css";
import "aos/dist/aos";
import icon from "../../assets/img/icon.png";
import logo from "../../assets/img/logo.png";

const Home = () => {
  return (
      <div className="d-flex justify-content-between p-4 bg-light">
        <img src={icon} alt="icon" style={{ width: "70%" }} />
        <div className="flex-grow-1 p-4 bg-light">
          <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
          <h1 className="font-size-24 mb-4">Solusi Tepat Mendapatkan Informasi Lowongan Pekerjaan</h1>
          <p className="font-size-16 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus id nunc gravida ultricies. Nullam auctor mauris ut luctus. Fusce semper ligula a metus iaculis, a fermentum dolor luctus.
          </p>
          <a to="/Login" className="btn btn-primary btn-lg">
            Bergabung
          </a>
        </div>
      </div>
  );
};
export default Home;
