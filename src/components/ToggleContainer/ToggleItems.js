import Card from "../UI/Card";
import classes from "./ToggleItems.module.css";
import React, { useState } from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { ArrowDownOutlined } from "@ant-design/icons/lib/icons";

const ToggleItems = ({ title, text, icon }) => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <Card>
      <div className={`${classes.container} ${toggle ? classes.expanded : ""}`}>
        <div className={classes.title}>
          <h3>{title}</h3>
        </div>
        <div className={`${classes.text} ${toggle ? classes.showText : ""}`}>
          <p>{text}</p>
        </div>
        <div onClick={toggleHandler} className={classes.icon}>
          {!toggle ? <ArrowUpOutlined /> : <ArrowDownOutlined />}
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default ToggleItems;
