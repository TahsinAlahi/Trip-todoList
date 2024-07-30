import React from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onPackedItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((itemObj) => (
          <Item
            item={itemObj}
            key={itemObj.id}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
