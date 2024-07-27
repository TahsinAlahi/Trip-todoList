import React from "react";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: true },
];

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((itemObj) => (
          <Item item={itemObj} key={itemObj.id} />
        ))}
      </ul>
    </div>
  );
}

export default PackingList;
