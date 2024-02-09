import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.scss";
import Dasboard from "./component/Dasboard";
import Employee from "./component/Employee";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dasboard />} />
          <Route path="/employee" element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
