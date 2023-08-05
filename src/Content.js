import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([
    { id: 1, item: "Gym", checked: false },
    { id: 2, item: "React.js", checked: false },
    { id: 3, item: "DL", checked: false },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("Todo_List", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("Todo_List", JSON.stringify(listItems));
  };

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => (
            <li className="item" key={item.id}>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
              ></input>
              <label
                style={item.checked ? { textDecoration: "line-through" } : null}
                onDoubleClick={() => handleCheck(item.id)}
              >
                {item.item}
              </label>
              <button>
                <FaTrashAlt
                  role="button"
                  tabIndex="0"
                  onClick={() => handleDelete(item.id)}
                />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <h2>Nothing to do</h2>
        </div>
      )}
    </main>
  );
};

export default Content;

// 3:13:30
