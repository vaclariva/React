import React from "react";
import "aos/dist/aos";
import { NavLink } from "react-router-dom";
import "./Cari.css";
import Kategori from "./Kategori";

const Cari = () => {
  return (
    <div className="container-fluid mt-3">
      {" "}
      <div className="row">
        <div className="input-group justify-content-start">
          <input type="text" className="form-control" placeholder="Search this blog" />
          <div className="input-group-append">
            <button className="btn btn-secondary cari" type="button">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <Kategori />
    </div>
  );
};

export default Cari;
