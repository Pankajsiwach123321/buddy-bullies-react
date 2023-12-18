import React from "react";
import PrimeBullister from "../assets/images/PrimeBullister.png";
import salvdor from "../assets/images/salvdor-bulli.png";
import metabully from "../assets/images/metabully.png";
import { Col, Container, Row } from "react-bootstrap";
const Ourteam = () => {
  return (
    <div>
      <div className="bg-color-primary m--1 " id="ourteam">
        <Container className="pt-100">
          <p className="font-family fs-4xl fw-lg color-seacandary text-center mb-0">
            Our Team
          </p>
          <Row >
            <Col lg={4} md={6} className=" pt-3  d-flex justify-content-center">
              <div>
                <img
                  src={PrimeBullister}
                  alt="PrimeBullister"
                  className="d-flex justify-content-center"
                />
                <p className="font-family fs-3xl fw-xl color-seacandary  text-center pt-4 ">
                  Prime Bullister
                </p>
                <p className="font-family fs-md fw-sm color-seacandary text-center ">
                  Pruduct Designer
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className=" pt-3  d-flex justify-content-center">
              <div>
                <img
                  src={salvdor}
                  alt="salvdor-bulli"
                  className="d-flex justify-content-center"
                />
                <p className="font-family fs-3xl fw-xl color-seacandary  text-center pt-4 ">
                  Solvador Bulli
                </p>
                <p className="font-family fs-md fw-sm color-seacandary text-center ">
                  Artist
                </p>
              </div>
            </Col>
            <Col lg={4} md={6} className=" pt-3 d-flex justify-content-center">
              <div>
                <img
                  src={metabully}
                  alt="metabully"
                  className="d-flex justify-content-center"
                />
                <p className="font-family fs-3xl fw-xl color-seacandary  text-center pt-4 ">
                  Meta Bully
                </p>
                <p className="font-family fs-md fw-sm color-seacandary text-center ">
                  Developer
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Ourteam;
