import React from "react";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import logo from "../images/logo.png"; // Gambar pertama
import icon from "../images/icon.png"; // Gambar kedua
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Home.css"; // Impor file CSS

function Home() {
  return (
    <div>
      <header className="bg-dark text-white p-4 d-flex align-items-center justify-content-between header">
        <img src={logo} alt="logo" style={{ width: "50px", height: "50px" }} />
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="Home.js">
                Beranda
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Cari.js">
                Cari Lowongan Kerja
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Masuk.js">
                Masuk
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="Daftar.js">
                Daftar
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <div className="d-flex justify-content-between p-4">
        <img src={icon} alt="icon" style={{ width: "70%" }} />
        <div className="flex-grow-1 p-4 bg-light">
          <img src={logo} alt="logo" style={{ width: "100px", height: "100px" }} />
          <h1 className="font-size-24 mb-4">Solusi Tepat Mendapatkan Informasi Lowongan Pekerjaan</h1>
          <p className="font-size-16 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus id nunc gravida ultricies. Nullam auctor mauris ut luctus. Fusce semper ligula a metus iaculis, a fermentum dolor luctus.
          </p>
          <a href="login.js" className="btn btn-dark btn-lg">
            Bergabung
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
