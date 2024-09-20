import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import MoviePage from './Components/MoviePage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
