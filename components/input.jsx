import React, { useState } from "react";
import "./styles.css";

export default function Input(props) {
  const [inputTask, setInputTask] = useState("");
  return (
    <>
      <div className="title">
        <p>My Todo list</p>
      </div>
      <div className="input">
        <input type="Text" className="input-box" placeholder="Enter task" 
        value={inputTask}
        onChange={e=>{
          setInputTask(e.target.value)
        }}
        />
        <button
          className="add-button"
          onClick={() => {
            props.addList(inputTask);
            setInputTask("");
          }}
        >
          +
        </button>
        {/* <p>{inputTask}</p> */}
      </div>
    </>
  );
}
