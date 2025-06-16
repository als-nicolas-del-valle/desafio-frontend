import React from "react";

function TabButton({ lable, active, ...props }) {
  return <button {...props}>{lable}</button>;
}

export default TabButton;
