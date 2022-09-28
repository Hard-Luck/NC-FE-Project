import "./App.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SingleReview from "./pages/SingleReview";

function App() {
  return (
    <div className="App">
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<Reviews />} />
        <Route path="/reviews/:review_id" element={<SingleReview />} />
        <Route path="/:category" element={<Category />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
