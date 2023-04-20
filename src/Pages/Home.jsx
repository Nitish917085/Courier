import React, { useState } from "react";
import Searches from "../Components/Searches";
import { Button, Space, Row, Col, Card, Popconfirm } from "antd";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import book3 from './book3.png'

const Home = () => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  const showPopconfirms = () => {
    setOpen(true);
  };
  const showPopconfirm = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setOpen(false);
    setConfirmLoading(false);
  };

  return (
    <div className="h-100" style={{ backgroundColor: "#E8E8E8" }}>
      <Navbar style={{ backgroundColor: "#ffffb3" }}>
        <Container>
          <Navbar.Brand href="#home">ShipMate</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Popconfirm
              title="Title"
              description="Not Yet Implemented"
              open={open}
              onConfirm={handleOk}
              okButtonProps={{ loading: confirmLoading }}
            >
              <Button
                type="primary"
                style={{ marginRight: "20px" }}
                onClick={showPopconfirm}
              >
                Login
              </Button>
            </Popconfirm>

            <Popconfirm
              style={{ marginRight: "20px" }}
              title="Title"
              description="Not Yet Implemented"
              open={open}
              onConfirm={handleOk}
              okButtonProps={{ loading: confirmLoading }}
            >
              <Button variant="outline-success" onClick={showPopconfirms}>
                Learn More
              </Button>
            </Popconfirm>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <h2 style={{marginBottom:"20px",marginTop:'40px'}}>Hassle-Free Shipping Solutions</h2>
      <h6>
        Compare, book, and manage your freight across the world’s top logistics
        providers, all on one platform.
      </h6>

      <div style={{ display: "flex" ,marginTop:"50px",marginBottom:"50px"}}>
        <Searches />
      </div>

      <h4 style={{marginBottom:"30px"}}>Services</h4>

      <Row className="justify-content-center" gutter={16}>
        <Col style={{ width: "280px" }}>
          <Card
            title="Freight Services"
            bordered={false}
            style={{ height: "100%" }}
          >
            Open new Opportunites to grow your busniess. Enter new markets and
            discover new contitnents, We are with you, door-to-door.
          </Card>
        </Col>
        <Col style={{ width: "280px" }}>
          <Card
            title="Business Services"
            bordered={false}
            style={{ height: "100%" }}
          >
            We support your goals for growth with cargo insurance, online
            payments and paperless workflow. Take your business to the next
            level.
          </Card>
        </Col>
        <Col style={{ width: "280px" }}>
          <Card
            title="Shipping & Logistics"
            bordered={false}
            style={{ height: "100%" }}
          >
            Find powerful solutions to meet your diverse transportation needs.
            Agile solutions to handle all your supply chain needs.
          </Card>
        </Col>
        <Col style={{ width: "280px", marginRight: "60px" }}>
          <Card
            title="24/7 Support"
            bordered={false}
            style={{ height: "100%" }}
          >
            Receive support from our experts all over the world at every stage
            of the process, 24/7.
          </Card>
        </Col>
        <img  style={{width:'100vw'}} src={book3} alt="kk"/>
      </Row>
      
    </div>
  );
};
export default Home;
