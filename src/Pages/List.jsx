import React from "react";
import Searches from "../Components/Searches";
import { addOrder } from "../Redux/reducer";
import Container from "react-bootstrap/Container";
import { Tabs, Button, Col, Row, Card, Badge, Image } from "antd";
import Navbar from "react-bootstrap/Navbar";
import booking2 from "./booking2.png";
import { EnvironmentOutlined, MinusOutlined } from "@ant-design/icons";
import { Collapse, message, Space } from "antd";
import Link from "antd/es/typography/Link";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const { Panel } = Collapse;

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

const items = [
  {
    key: "1",
    label: `Best Value 5-7 days`,
  },
  {
    key: "2",
    label: `Quikest 4-5 days`,
  },
  {
    key: "3",
    label: `Cheapest 7-9 days`,
  },
];

const List = () => {
  const dispatch = useDispatch();
  const routes = useSelector((state) => state.routes);

  const origin = useSelector((state) => console.log(state.final_origin));

  const seletedValue = (e, index) => {
    dispatch(addOrder(routes[index]));
  };

  return (
    <div
      className="h-100" style={{ backgroundColor: "#E8E8E8" }}
    >
      <Navbar style={{ backgroundColor: "#ffffb3" }}>
        <Container>
          <Navbar.Brand href="#home">ShipMate</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
        </Container>
      </Navbar>

      <img
        style={{ width: "500px", marginTop: "100px", marginBottom: "50px" }}
        src={booking2}
        alt="kk"
      />
      <div>
        <Searches />
      </div>
      <hr />
      <Row>
        <Col span={8}>
          <h6>3 Top Quote (6 in Total)</h6>
          <Collapse ghost>
            <Panel expandIconPosition={"start"} header="Filter" key="1">
              <p>Filter 1</p>
              <p>Filter 2 </p>
              <p>Filter 3 </p>
            </Panel>
            <Panel header="Price" key="2">
              <p>Price 1</p>
              <p>Price 2</p>
              <p>Price 3</p>
            </Panel>
            <Panel header="Modes" key="3">
              <p>Mode 1</p>
              <p>Mode 2</p>
            </Panel>
            <Panel header="Seller" key="3">
              <p>Seller 1</p>
              <p>Seller 2</p>
            </Panel>
          </Collapse>
        </Col>
        <Col span={12}>
          <Row>
            <Tabs type="card" defaultActiveKey="1" items={items} />
          </Row>
          {routes.map((items, index) => {
            return (
              <Card
                style={{
                  marginTop: "10px",
                  border: "1px solid lightgray",
                  box: "10px 10px 5px lightgray",
                }}
              >
                <Row>
                  <Col span={18}>
                    <Col>
                      <Row>
                        <Col
                          style={{
                            backgroundColor:
                              items.fare < 200 ? "lightgreen" : "lightblue",
                            width: "80px",
                            borderRadius: "5px",
                          }}
                        >
                          <Badge
                            color={items.fare < 200 ? "green" : "blue"}
                          ></Badge>
                          <span>
                            {items.fare < 200 ? " Best Value" : " Eco"}
                          </span>
                        </Col>
                        <Col style={{ color: "red", margin: "0px 5px" }}>
                          Express
                        </Col>
                        |
                        <Col style={{ color: "gray", marginLeft: "5px" }}>
                          {`Est. ${items.estimated_delivery_days} days`}
                        </Col>
                      </Row>
                      <Row style={{margin:'20px'}}>
                        <Col>
                          <EnvironmentOutlined />
                          {`${items.origin.origin_pincode},${items.origin.origin_place_name}`}
                        </Col>
                        <Col span={10}>
                          <hr style={{ borderTop: "3px solid black" }} />
                        </Col>
                        <Col>
                          <EnvironmentOutlined />
                          {`${items.destination.destination_pincode},${items.destination.destination_place_name}`}
                        </Col>
                      </Row>
                      <Row></Row>
                    </Col>
                  </Col>
                  <Col
                    style={{
                      borderLeft: "2px solid gray",
                      paddingLeft: "10px",
                    }}
                  >
                    <Row>$ {`${items.fare}`}</Row>
                    <NavLink to="/summary">
                      <Row>
                        <Button
                          type="primary"
                          onClick={(e) => seletedValue(e, index)}
                        >
                          Select
                        </Button>
                      </Row>
                      <Row>
                        <Link>View Details</Link>
                      </Row>
                    </NavLink>
                  </Col>
                </Row>
              </Card>
            );
          })}
        </Col>
      </Row>
    </div>
  );
};

export default List;
