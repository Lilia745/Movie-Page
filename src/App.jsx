import './App.css';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import MoviePage from './Components/MoviePage';
import Comedy from './Components/Comedy';
import Drama from './Components/Drama';
import Family from './Components/Family';

function App() {
  return (
    <Router>
      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage/>} />
        <Route path="/comedy" element={<Comedy/>}/>
        <Route path="/drama" element={<Drama/>}/>
        <Route path="/family" element={<Family/>}/>
      </Routes>
    </Router>
  );
}

export default App;
