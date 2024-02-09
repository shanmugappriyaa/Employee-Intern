import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./index.scss";
import Dasboard from "./component/Dasboard";
import Employee from "./component/Employee";
import Layout from "./Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  element={<Dasboard />} />
            <Route path="/employee" element={<Employee />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
