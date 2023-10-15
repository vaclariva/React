import React from "react";
import "aos/dist/aos";
import { NavLink } from "react-router-dom";

const Berita = () => {
  const h3Style = {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#007BFF",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div className="m-5 overflow-x-hidden">
      <h3 className="mb-4 text-center" style={h3Style}>
        List of News
      </h3>
      <div className="row">
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_640.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2017/11/14/13/06/kitty-2948404_640.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_640.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2013/04/01/03/45/cat-98359_640.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2018/09/11/11/47/animal-3669244_640.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
        <div className="col-3">
          <img
            className="rounded-4"
            style={{ objectFit: 'cover', width: '100%', aspectRatio: '1/1' }}
            src="https://cdn.pixabay.com/photo/2019/10/18/09/29/cat-4558651_640.jpg"
            alt=""
          />
          <p className="mt-3">
            <b>Jhon Due | 20-08-2022</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit Soluta
            accusantium praesentium ducimus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Berita;
