import React from "react";
import "./dashboard.scss";
import { FaUsers, FaChartBar, FaClipboard } from "react-icons/fa";
import Widget from "./Dashboard - components/Widget";

const Dashboard = () => {

  const data = [
    {
      icon: <FaUsers />,
      digits: 50,
      isMoney: false,
      title: "USERS",
      color: "rgb(102, 108, 255)",
      bgColor: "rgba(102, 108, 255, 0.12)",
    },

    {
      icon: <FaClipboard />,
      digits: 70,
      isMoney: false,
      title: "ORDERS",
      color: "rgb(38, 198, 249)",
      bgColor: "rgba(102, 108, 249, 0.12)",
    },
    {
      icon: <FaChartBar />,
      digits: 500,
      isMoney: true,
      title: "EARNINGS",
      color: "rgb(253, 181, 40)",
      bgColor: "rgba(253, 180, 40, 0.12)",
    },
  ];

  return (
    <div className="style__summary">
      <div className="MainStats">
        <div className="Overview">
          <div className="Title">
            <h2>Overview</h2>
            <p>How your shop is performing compared to the previos month</p>
          </div>
          <div className="WidgetWrapper">
            {data?.map((data, index) => (
              <Widget key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
      <div className="SideStats"></div>
    </div>
  );
};

export default Dashboard;
