import React from "react";

function Item({ item, onDeleteItem }) {
  const { id, description, quantity, packed } = item;

  return (
    <li key={id}>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
