import React from "react";

function ItemButton({ lable, ...props }) {
  return <button {...props}>{lable}</button>;
}

export default ItemButton;
