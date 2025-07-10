import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TrendingTags from "./pages/trendingTags";


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TrendingTags />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
