import React from "react";
import bat1 from "../assets/images/card-bat-1.png";
import bat2 from "../assets/images/card-bat-2.webp";
import bat3 from "../assets/images/card-bat-3.webp";
import bat4 from "../assets/images/card-bat-4.webp";
import bat5 from "../assets/images/card-bat-5.webp";
import bat6 from "../assets/images/card-bat-6.webp";
import { Col, Container, Row } from "react-bootstrap";
const myinfo = [
  {
    img: bat1,
    para1: " ART COLLECTION",
    para2: `Complete the art collection  in full with +70 unique traits, and publish our rarity chart on our webpage.`,
  },
  {
    img: bat2,
    para1: " SPECIAL BULLIES",
    para2: (
      <>
        <span className="fw-md">
          20 Buddybullies
          <b className="fw-sm"> &#123;out of 10k&#125;</b>
          will have a very special and ersonalized resembling of famous people
          who are into NFTs &#123;those will be available after the
          minting&#125;
        </span>
      </>
    ),
  },
  {
    img: bat3,
    para1: "BREEDING",
    para2: (
      <>
        Our <span className="fw-md"> BuddyBullies</span> will not come alone, as
        we will announce the breeding function after the minting and you will be
        able to get a PuppyBully &#123; for free&#125;.
      </>
    ),
  },
  {
    img: bat4,
    para1: "DIGITALMARKETS",
    para2: (
      <>
        <span className="fw-md">
          Communicate with all the digital markets{" "}
          <span className="fw-sm"> available</span> in the Solana NFT world for
          getting our collection successfully listed.
        </span>
      </>
    ),
  },
  {
    img: bat5,
    para1: "MERCH",
    para2: (
      <>
        The team is <span className="fw-md"> working on</span> the future merch
        thet will be available for the community members directly on our
        webpage.
      </>
    ),
  },
  {
    img: bat6,
    para1: "CHARITY",
    para2: (
      <>
        We will be giving <span className="fw-md"> 30%</span> of the royalties
        to charity permanently and we will keep spending on marketing,
        promotions and partnership.50% of the riyalties will go back to the
        community as rewards.
      </>
    ),
  },
];
const Infoabout = () => {
  const myown = myinfo.map((myinfo) => (
    <Col lg={4} md={6} className="pt-4">
      <div className="mycard">
        <img src={myinfo.img} alt="card-bat-1" className="#" />
        <p className="font-family fs-3xl fw-xl color-seacandary mb-0 pt-44">
          {myinfo.para1}
        </p>
        <p className="font-family fs-lg fw-sm color-tertiary mb-0 pt-4 w-347 lh-30">
          {myinfo.para2}
        </p>
      </div>
    </Col>
  ));
  return (
    <div>
      <div className="bg-color-primary m--1 pt-5">
        <Container className="pt-5">
          <Row className="pt-5">{myown}</Row>
        </Container>
      </div>
    </div>
  );
};

export default Infoabout;
