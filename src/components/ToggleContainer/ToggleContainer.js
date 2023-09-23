import Card from "../UI/Card";
import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { ArrowDownOutlined } from "@ant-design/icons/lib/icons";
import classes from "./ToggleContainer.module.css";
import ToggleItems from "./ToggleItems";
const ToggleContainer = () => {
  const Dummy_Data = [
    {
      title:
        "How does Parkname seperate itself rom other companies domain name parking companies?",
      text: "ParkName distinguishes itself from other domain name parking companies through a combination of features, services, and a commitment to customer satisfaction",
    },
    {
      title:
        "Is Parkname actually free?",
      text: "Parkname, our domain parking service, offers a genuinely free and accessible solution for users looking to park their domains without hidden fees or charges. Unlike some other domain parking platforms, Parkname believes in transparency and simplicity.",
    },
    {
      title:
      "What do you do",
      text: "Parkname is a domain parking service that specializes in helping you monetize your unused or parked domain names. We provide a platform where you can 'park' your domains, which essentially nce metrics, and optimizing your domain portfolio. Whether you're a domain investor looking to generate passive income from your unused domains or simply want to make the most out of your online assets, Parkname is here to help you achieve your goals in the domain industry."
      
      
      
      
      
      
    },
  ];
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };
  return (
    <Card>
      <div className={classes.container}>
        <div className={classes.main}>
          <div onClick={toggleHandler} className={classes.icon}>
            {" "}
            {!toggle ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          </div>
          <div className={classes.pic}>
            {" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/3237/3237472.png"
              alt="image"
            />
          </div>
          <div className={classes.content}>
            <div className={classes.title}>
              <h1>About us</h1>
            </div>
            <div className={classes.text}>
              <p>4 articles in this topic</p>
            </div>{" "}
          </div>
        </div>
        {Dummy_Data.map((item) => {
          return <ToggleItems title={item.title} text={item.text} />;
        })}
      </div>
    </Card>
  );
};
export default ToggleContainer;
