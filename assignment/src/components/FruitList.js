import React from "react";

const allItems = [
  { id: "apple", value: "🍎 apple" },
  { id: "orange", value: "🍊 orange" },
  { id: "grape", value: "🍇 grape" },
  { id: "pear", value: "🍐 pear" },
];

function FruitList() {
  const [items, setItems] = React.useState(allItems);

  function addItem() {
    setItems([...items, allItems.find((i) => !items.includes(i))]);
  }

  function removeItem(item) {
    setItems(items.filter((i) => i !== item));
  }

  return (
    <div>
      <button disabled={items.length >= allItems.length} onClick={addItem}>
        add item
      </button>
      <ul style={{ paddingLeft: 30 }}>
        {items.map((item, idx) => (
          <li style={{ listStyle: "none", paddingLeft: 0 }} key={idx}>
            <button onClick={() => removeItem(item)}>remove</button>{" "}
            <label htmlFor={`${item.id}-input`}>{item.value}</label>{" "}
            <input id={`${item.id}-input`} defaultValue={item.value} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FruitList;
