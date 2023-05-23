import React from "react";
import "./widget.scss";
import styled from "styled-components";

const Widget = ({ data }) => {
  return (
    <div className="widget">
      <Icon color={data.color} bgcolor={data.bgColor}>
        {data.icon}
      </Icon>
      <div className="Text">
        <h3>
          {data.isMoney
            ? "฿" + data.digits?.toLocaleString()
            : data.digits?.toLocaleString()}
        </h3>
        <p>{data.title}</p>
      </div>
    </div>
  );
};

const Icon = styled.div`
  margin-right: 0.5rem;
  padding: 0.5rem;
  color: ${({ color }) => color};
  background: ${({ bgcolor }) => bgcolor};
  border-radius: 5px;
  font-size: 20px;
`;
export default Widget;
