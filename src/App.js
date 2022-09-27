import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/reviews/:category" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
