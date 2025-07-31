import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/dashboard";
import AboutMePage from "./pages/aboutMe";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="about-me" element={<AboutMePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
