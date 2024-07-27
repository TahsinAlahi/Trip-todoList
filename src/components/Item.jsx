import React from "react";

function Item({ item }) {
  const { id, description, quantity, packed } = item;
  return (
    <li key={id}>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button>❌</button>
    </li>
  );
}

export default Item;
