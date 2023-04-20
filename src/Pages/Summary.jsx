import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Card, Button, Popconfirm } from "antd";
import { useSelector } from "react-redux";
import FlightIcon from "@mui/icons-material/Flight";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import booking from './booking.png'

import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "@mui/material";

const seller = {
  sellerQuote: 2000,
  platformfee: 120,
  Insurance: 300,
  dutiesAndTaxes: 0,
};

const Summary = () => {
  const details = useSelector((state) => state);
  console.log(details);

  const [summary, setSummary] = useState({
    date: "00-00-0000",
    dimension: [],
    routes: [],
    final_order: {},
  });

  const [dimensions, setDimensions] = useState({
    weight: "",
    height: "",
    width: "",
    length: "",
  });

  const [finalOrder, setFinalOrder] = useState({
    id: 1,
    estimated_delivery_days: 0,
    origin: {
      origin_pincode: "",
      origin_place_name: "",
    },
    destination: {
      destination_pincode: "",
      destination_place_name: "",
    },
    fare: 0,
  });

  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    setConfirmLoading(false);
  };

  useEffect(() => {
    setSummary(() => {
      setSummary(details);
      setFinalOrder(details.final_order);
      setDimensions(details.dimension);
    });
  }, [details]);

  return (
    <div className="h-100" style={{ backgroundColor: "#E8E8E8" }}>
      <Navbar bg="primary">
        <Container>
          <Navbar.Brand href="#home">ShipMate</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button variant="info" style={{ marginRight: "5px" }}>
              $
            </Button>{" "}
            <Button variant="outline-success">Track Shipment</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <img  style={{width:'500px', marginTop:'100px',marginBottom:'50px'}} src={booking} alt="kk"/>
      <Row style={{ marginRight: " 12px 12px", backgroundColor: "#E8E8E8" }}>
        <Col span={12} className="m-5">
          <Card style={{ backgroundColor: "#c2c2a3" }}>
            <Row span={24} className="m-1">
              <Col span={24}>
                <Card span={12}>
                  <Row>
                    <h6>Booking Summary</h6>
                  </Row>

                  <Row span={24}>
                    <Col span={5}>
                      <AccountBalanceOutlinedIcon />
                      <div>
                        {finalOrder.origin.origin_place_name
                          ? finalOrder.origin.origin_place_name
                          : "0000"}
                      </div>
                      <div>
                        {finalOrder.origin.origin_pincode
                          ? finalOrder.origin.origin_pincode
                          : "0000"}
                      </div>
                    </Col>

                    <Col span={14}>
                      <FlightIcon />
                      <hr style={{borderTop:'3px solid black'}}/>
                  
                    </Col>

                    <Col  span={5}>
                      <AccountBalanceOutlinedIcon />
                      <div>
                        {finalOrder.destination.destination_place_name
                          ? finalOrder.destination.destination_place_name
                          : "0000"}
                      </div>
                      <div>
                        {finalOrder.destination.destination_pincode
                          ? finalOrder.destination.destination_pincode
                          : "0000"}
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
            <Row className="m-1">
              <Col span={8} style={{ paddingRight: "2px" }}>
                <Card style={{ height: "100%" }}>
                  <h6 style={{ fontSize: "12px" }}>Total Weight/Volume</h6>
                  <MonitorWeightOutlinedIcon />
                  <div>{dimensions.weight} Kg</div>
                </Card>
              </Col>

              <Col span={16}>
                <Card style={{ height: "100%" }}>
                  <h6
                    style={{ position: "inherit", left: "10px", top: "10px" }}
                  >
                    Load
                  </h6>
                  <ShoppingBasketIcon />
                  <div>
                    {dimensions.length}x{dimensions.width}x{dimensions.height}{" "}
                    cm
                  </div>
                </Card>
              </Col>
            </Row>
            <Row className="m-1">
              <Col span={12} style={{ paddingRight: "2px" }}>
                <Card>
                  <Row>Seller:Primitive Worldwide</Row>
                  <img
                    src="https://images.unsplash.com/photo-1582517378602-f109b395ce40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="No image"
                    style={{ height: "40px", width: "80px" }}
                  />
                </Card>
              </Col>
              <Col span={12}>
                <Card>
                  <Row>Insurance:XCover.com</Row>
                  <img
                    src="https://www.xcover.com/r-196438/static/media/logo.bb326494.svg"
                    alt="No image"
                    style={{ height: "40px", width: "80px" }}
                  />
                </Card>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col span={8} className="w-25 justify-content-end m-5">
          <Card>
            <Row>
              Price Details
              <Col
                className="mx-3"
                style={{
                  fontSize: "10px",
                  width: "100px",
                  justifyContent: "center",
                  borderRadius: "10px",
                  backgroundColor: "#E8E8E8",
                }}
              >
                <StarIcon style={{ fontSize: "10px" }} />
                <span style={{ marginTop: "10px" }}>Known Sniper</span>
              </Col>
            </Row>
            <Row span={24}>
              Seller's Quote
              <span style={{ position: "absolute", right: "10px" }}>
                ${dimensions.weight*13+dimensions.height*dimensions.length*dimensions.width/2}
              </span>
            </Row>
            <hr />
            <Row span={24}>
              Duties and taxes
              <span style={{ position: "absolute", right: "10px" }}>
                ${(dimensions.weight*13+dimensions.height*dimensions.length*dimensions.width/2)/4}
              </span>
            </Row>

            <Row span={24}>
              Insurance
              <span style={{ position: "absolute", right: "10px" }}>
                ${(dimensions.weight*13+dimensions.height*dimensions.length*dimensions.width/2)/6}
              </span>
            </Row>
            <Row style={{ fontSize: "10px" }}>Based on the items cost</Row>
            <hr />
            <Row span={24}>
              Add a<Link>promo code</Link>
              <span style={{ position: "absolute", right: "10px" }}>
                 No promo code
              </span>
            </Row>
            <Row span={24}>
              Platform fee
              <span style={{ position: "absolute", right: "10px" }}>
                ${130}
              </span>
            </Row>
            <hr />
            <Row span={24}>
              Total
              <span style={{ position: "absolute", right: "10px" }}>
                ${(dimensions.weight*13+dimensions.height*dimensions.length*dimensions.width/2)*17/12 +130}
              </span>
            </Row>

            <Popconfirm
              title="Title"
              description="Not Yet Implemented"
              open={open}
              onConfirm={handleOk}
              okButtonProps={{ loading: confirmLoading }}
            >
              <Button type="primary" onClick={showPopconfirm}>
                CheckOut
              </Button>
            </Popconfirm>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Summary;
