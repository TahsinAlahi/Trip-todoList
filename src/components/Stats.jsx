import React from "react";

function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list 🚀</em>
      </footer>
    );

  const itemAmount = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentPacked = Math.floor((packedItems / itemAmount) * 100);

  return (
    <footer className="stats">
      <em>
        {percentPacked === 100
          ? `You got everything! Ready to go✈️`
          : `💼 You have ${itemAmount} item${
              itemAmount > 1 ? "s" : ""
            } in your list, and you already packed ${packedItems} (${
              percentPacked ? percentPacked : 0
            }%)`}
      </em>
    </footer>
  );
}

export default Stats;
