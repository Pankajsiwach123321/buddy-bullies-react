import React from "react";
import { Container } from "react-bootstrap";

const Buddynav = () => {
  function nav() {
    document.querySelector(".menubar").classList.toggle("right-0");
  }
  return (
    <div>
      <nav className="pt-4">
        <Container className="d-flex justify-content-between align-items-center">
          <ul className="mb-0 px-0">
            <li>
              <a
                href=""
                className="text-decoration-none font-family fs-md fw-lg color-seacandary"
              >
                logo
              </a>
            </li>
          </ul>
          <label id="nav" className="nav" onClick={nav}>
            <span></span>
            <span></span>
            <span></span>
          </label>
          <ul className="d-flex align-items-center gap-5 list-unstyled mb-0 menubar">
            <li>
              <a
                href="#mint"
                className="font-family fs-md fw-md color-seacandary text-decoration-none underline-nav"
              >
                Minting
              </a>
            </li>
            <li>
              <a
                href="#Roadmap"
                className="font-family fs-md fw-md color-seacandary text-decoration-none underline-nav"
              >
                Road Map
              </a>
            </li>
            <li>
              <a
                href="#FAQs"
                className="font-family fs-md fw-md color-seacandary text-decoration-none underline-nav"
              >
                Faq
              </a>
            </li>
            <li>
              <a
                href="#ourteam"
                className="font-family fs-md fw-md color-seacandary text-decoration-none underline-nav"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#join"
                className="font-family fs-md fw-md color-seacandary text-decoration-none underline-nav"
              >
                Join Us
              </a>
            </li>
          </ul>
        </Container>
      </nav>
    </div>
  );
};

export default Buddynav;
