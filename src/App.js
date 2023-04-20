import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import List from "./Pages/List";
import Summary from "./Pages/Summary";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/list" element={<List/>} />      
        <Route path="/summary" element={<Summary/>} />
      
      </Routes>
    </div>
  );
}

export default App;
