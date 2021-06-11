import React from "react";

const ColofulMessage = (props) => {
  //props:compornentsの引数
  const { color, children } = props;
  const contentStyle = {
    color, //color:color
    fontSize: "18px"
  };
  return <p style={contentStyle}>{children}</p>;
};

export default ColofulMessage;
