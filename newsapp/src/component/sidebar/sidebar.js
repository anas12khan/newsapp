import React from "react";

const Sidebar = (props) => {
  console.log(props);
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.value}</div>
    </div>
  );
};

export default Sidebar;
