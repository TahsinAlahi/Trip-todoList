import React, { useState } from "react";
import Item from "./Item";

function PackingList({ items, onDeleteItem, onPackedItem, onClearList }) {
  const [sortType, setSortType] = useState("input");

  let sortItems;

  if (sortType === "input") sortItems = items;

  if (sortType === "description") {
    sortItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortType === "packed") {
    sortItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortItems.map((itemObj) => (
          <Item
            item={itemObj}
            key={itemObj.id}
            onDeleteItem={onDeleteItem}
            onPackedItem={onPackedItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          value={sortType}
          onChange={(event) => setSortType(event.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status </option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}

export default PackingList;
