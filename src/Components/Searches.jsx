import React, { useEffect, useRef, useState } from "react";
import {useDispatch,useSelector} from 'react-redux'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import { ArrowRightOutlined,FunnelPlotOutlined } from "@ant-design/icons"
import data from "../data";
import {
  Button,
  Form,
  DatePicker,
  Tooltip,
  Typography,
  Divider,
  Input,
  Select,
  Space,
} from "antd";

import { addOrigin,addDetails, addDate } from "../Redux/reducer";
import Forms from "./Form";
const { Option } = Select;
let index = 0;

const Searches = () => {

const dispatch=useDispatch();
const details=useSelector((state)=>state);


  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const [origins, setOrigins] = useState([]);
  const [onlyOrigin, setOnlyOrigin] = useState([]);

  const [onlyDestinations, setOnlyDestinations] = useState([]);

  const [uniqueDestination, setUniqueDestination] = "";

  const inputRef = useRef(null);

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, name || `New item ${index++}`]);
    setName("");
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  //================================================
  const onChange = (date, dateString) => {
    dispatch(addDate(dateString));
  };

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  //===============================================

  //===============================================================================
  const onOriginSearch = (value) => {
    console.log("search:", value);
  };
  //------------------------------------------
  const onOriginChange = (value) => {      
    const origin= data.filter(
      (items) => items.origin.origin_place_name === value
    );
    console.log("origin",origin);

    setOrigins(origin);

    let onlyDestinations = origin.map(
      (item) => item.destination.destination_place_name
    );
    console.log("onlu",onlyDestinations)
    onlyDestinations = new Set(onlyDestinations);
    setOnlyDestinations(Array.from(onlyDestinations));   
  };
  //-----------------------------------------
  const onDestinationChange = (value) => {
    console.log("dest ori",origins)
    // dispatch(finalDestination(value))
    let selectedDestination = origins.filter(
      (items) => items.destination.destination_place_name === value,
    );
    console.log("desti",selectedDestination)
    dispatch(addDetails(selectedDestination));

  };

  //------------------------------------------
  const onDestinationSearch = (value) => {

  };
  //=====================================================================================
  useEffect(() => {
    setOnlyOrigin(() => {
      let onlyOrigins = data.map((items) => items.origin.origin_place_name);
      onlyOrigins = new Set(onlyOrigins);
      return Array.from(onlyOrigins);
    });
    forceUpdate({});
  }, []);
  //----------------------------------------------------------------------------------------

  return (
    <div className="container h-100" >
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
        style={{ padding:'5px 5px 5px 5px', borderRadius:"5px",backgroundColor:"#c2c2a3",display:"flex",justifyContent:"center"}}
      >

        <Form.Item
          name="origin"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select
            style={{ width: "200px"}}
            showSearch
            placeholder="Select Origin"
            optionFilterProp="children"
            onChange={onOriginChange}
            onSearch={onOriginSearch}
            filterOption={(input, option) =>
              (option?.value ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={onlyOrigin.map((items) => {
              return {
                label: `${items}`,
                value: `${items}`,
              };
            })}
          />
        </Form.Item>

        <Form.Item
          name="destination"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Select
            style={{ width: "200px" }}
            showSearch
            placeholder="Select Destination"
            optionFilterProp="children"
            onChange={onDestinationChange}
            onSearch={onDestinationSearch}
            filterOption={(input, option) =>
              (option?.value ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={onlyDestinations.map((items) => {
              return {
                label: `${items}`,
                value: `${items}`,
              };
            })}
          />
        </Form.Item>

        <Form.Item
          style={{ width: "200px"}}
          name="date"
          rules={[{ required: true, message: "Please Input Date!" }]}
        >
          <DatePicker   style={{ width: "200px"}} onChange={onChange} />
        </Form.Item>

        <Form.Item shouldUpdate>
       
          <Select
            style={{
              width: 300,
            }}
            placeholder="Load"
            dropdownRender={(menu) => (
              <>
              
                {menu}
                <Divider
                  style={{
                    margin: "8px 0",
                  }}
                />
                <Space
                  style={{
                    padding: "0 8px 4px",
                  }}
                >
               
                 <Forms/>
            
                </Space>
              </>
            )}
            options={items.map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </Form.Item>
        <NavLink to="/list">       
          <Button type="primary" htmlType="submit" icon={<ArrowRightOutlined />} />
        </NavLink>
      </Form>
    </div>
  );
};

export default Searches;
