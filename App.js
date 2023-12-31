// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import Input from "./components/input";
import Todolist from "./components/display";
import Counter from "./Clickcounter";

function App() {
  const [list, setList] = useState([]);
  let addList = (inputTask) => {
    if (inputTask !=="") setList([...list, inputTask]);
  };

  const deletee = (key) => {
    let newlist = [...list];
    newlist.splice(key, 1);
    setList([...newlist]);
  };
  // const strike=(id)=>{
  //   const newlist=todos
  // }
  return (
    <div className="container">
      <Input addList={addList} />
      {list.map((item, i) => {
        return <Todolist item={item} index={i} delete={deletee} />;
      })}
    </div>
    // <Counter/>
  );
}

export default App;
