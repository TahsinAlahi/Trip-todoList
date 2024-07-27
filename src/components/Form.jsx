import React, { useState } from "react";

function Form() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(5);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(event) => {
          setQuantity(Number(event.target.value));
          console.log(event);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Form;
