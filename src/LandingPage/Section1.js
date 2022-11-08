import React from "react";
import { Col, Row } from "react-bootstrap";
import Button from "../CustomFiles/Button";
import { Instagram, Linkedin, Twitter, Facebook, GitHub } from "react-feather";
import pharmacist from "../image/ddd.png";
export default function Section1() {
  return (
    <div className="section1_whole">
      <div className="container">
        <Row className="">
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="heading_div">
              <div className="mobile_heading_div">
                <h1 className="heading">Record.</h1>
                <h1 className="heading">Track.</h1>
                <h1 className="heading">Validate and Earn.</h1>
                <p className="sub_heading">
                  Health is wealth. Live longer and healthier when you trust
                  DrugCipher for total wellness.
                </p>
                <Button
                  className={"market_place_btn"}
                  btnText={"Download Our WhitePaper"}
                  style={{ marginRight: 10 }}
                />
                <Button
                  className={"market_place_btn doctor_btn"}
                  btnText={"Launch DrugCipher App"}
                />
                <p className="m-0 mt-5 text-white follow-us">Follow us</p>
                <div className="header-icons-div mt-2">
                  <div className="header-icon">
                    <GitHub size="1.5em" />
                  </div>
                  <div className="header-icon">
                    <Twitter size="1.5em" />
                  </div>
                  <div className="header-icon">
                    <Facebook size="1.5em" />
                  </div>
                  <div className="header-icon">
                    <Linkedin size="1.5em" />
                  </div>
                  <div className="header-icon">
                    <Instagram size="1.5em" />
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={6} md={12} sm={12} xs={12}>
            <div className="heading_div architecture-container">
              <div className="animate-img">
                <img
                  src={pharmacist}
                  alt="pharmacist"
                  className="header-image"
                />
              </div>
              <div className="architecture-data1">
                01
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>Record.</p>
                  <p>
                    Store your drug information in a blockchain, each node has a
                    full record of the data that has been stored on the
                    blockchain since its inception.
                  </p>
                </div>
              </div>
              <div className="architecture-data2">
                02
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>Track.</p>
                  <p>
                    Blockchain technology opens up everything and creates a
                    linear, easier-to-follow trace on products(drugs) that
                    cannot be altered.
                  </p>
                </div>
              </div>
              <div className="architecture-data3">
                03
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>Recall Drug.</p>
                  <p>
                    You can recall drugs to protect the public from a defective
                    or potentially harmful drug.
                  </p>
                </div>
              </div>
              <div className="architecture-data4">
                04
                <div className="architecture-content">
                  <p style={{ fontWeight: "bold", margin: 0 }}>
                    Validate Products.
                  </p>
                  <p>
                    To validate the integrity of the drug, you can download our
                    smart(AI) and blockchain base scanner, To check the
                    authenticity of the drug and earn some token in return.
                  </p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
