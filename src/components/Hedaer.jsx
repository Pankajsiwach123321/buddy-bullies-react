import React from "react";
import layerheader from "../assets/images/gradiant.png";
const Hedaer = () => {
  return (
    <div className="flex-grow-1 d-flex align-items-center position-relative z-1">
      <div className="container">
        <div>
          <p className="fs-5xl fw-sm font-family color-seacandary w-515">
            Vitae nunc,{" "}
            <span className="fs-5xl fw-xl font-family color-seacandary">
              blandit a odio
            </span>
          </p>
          <p className="w-515 fs-lg  fw-md font-family color-seacandary pt-3 semper">
            Semper in egestas risus id tempus. Pellentesque dolor eros
            sollicitudin feugiat ut odio semper. Mattis fermentum eget ut
            vestibulum dolor diam
          </p>
          <button className="fs-2xl  fw-md font-family  getstarted mt-5">
            Get Started
          </button>
          <img alt="batgif" src={layerheader} className="w-100 gradient" />
        </div>
      </div>
    </div>
  );
};

export default Hedaer;
