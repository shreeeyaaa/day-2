import React, { useState } from "react";

export default function Todolist(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    if (isChecked) return null;
    setIsChecked(!isChecked);
  };
  return (
    <ul>
      <li className="listitem">
        <input
          type="checkbox"
          style={{ margin: "0px 10px 0px 2px" }}
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {props.item}
        </span>
        <span className="icons">
          <i
            class="fa-solid fa-trash icon-delete"
            onClick={(e) => {
              props.delete(props.index);
            }}
          ></i>
        </span>
      </li>
    </ul>
  );
}
