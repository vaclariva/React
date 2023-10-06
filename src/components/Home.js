import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import logo from './logo.png'; // Gambar pertama
// import icon from '../icon.png'; // Gambar kedua
import './Home.css'; // Impor file CSS

function Home() {
  return (
    <div>
      <header className="bg-dark text-white p-4 d-flex align-items-center justify-content-between">
        <img src="logo.png" alt="logo" style={{ width: '50px', height: '50px' }} />
        <nav>
          <ul className="list-unstyled d-flex">
            <li className="mr-3"><a href="Home.js">Beranda</a></li>
            <li className="mr-3"><a href="Cari.js">Cari Lowongan Kerja</a></li>
            <li className="mr-3"><a href="Masuk.js">Masuk</a></li>
            <li className="mr-3"><a href="Daftar.js">Daftar</a></li>
          </ul>
        </nav>
      </header>

      <div className="d-flex justify-content-between p-4">
        <img src="icon.png" alt="icon" style={{ width: '70%' }} />
        <div className="flex-grow-1 p-4 bg-light">
          <img src="logo.png" alt="logo" style={{ width: '100px', height: '100px' }} />
          <h1 className="font-size-24 mb-4">Solusi Tepat Mendapatkan Informasi Lowongan Pekerjaan</h1>
          <p className="font-size-16 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in risus id nunc gravida ultricies. Nullam auctor mauris ut luctus. Fusce semper ligula a metus iaculis, a fermentum dolor luctus.</p>
          <a href="login.js" className="btn btn-dark btn-lg">Bergabung</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
