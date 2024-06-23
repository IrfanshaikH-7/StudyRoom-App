// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import { Permission, Search, View } from "./components";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>


         <Routes>
        <Route path="/login" element={<Login/>} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/view" element={<View />} />
          <Route path="/permission" element={<Permission />} />
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
