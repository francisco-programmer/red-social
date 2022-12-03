import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import LayaoutHome from "./layouts/LayaoutHome";

function App() {
  return (
    <div className="App ">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<LayaoutHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
