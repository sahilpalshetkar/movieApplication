import "./css/App.css"
import MovieCard from "./components/movieCard";
import Favorite from "./pages/Favorite";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Admin from "./pages/Admin";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  

  return (
    <>
    <MovieProvider>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Favorite" element={<Favorite />}/>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
    </MovieProvider>
    </>
  );
}

export default App;
