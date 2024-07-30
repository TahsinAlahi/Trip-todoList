import React from "react";

function Item({ item, onDeleteItem, onPackedItem }) {
  const { id, description, quantity, packed } = item;

  return (
    <li key={id}>
      <input
        type="checkbox"
        onChange={(event) => {
          onPackedItem(id, event.target.checked);
        }}
        value={item.packed}
      />
      <span
        style={packed ? { textDecoration: "line-through" } : {}}
        // onClick={() => onPackedItem(id)}
      >
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

export default Item;
