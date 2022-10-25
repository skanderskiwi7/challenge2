import logo from "./logo.svg";
import "./App.css";
import { list } from "./data";
import User from "./User";
console.log(list);
function App() {
  return (
    <div className="App">
      <User list={list} />
    </div>
  );
}

export default App;
