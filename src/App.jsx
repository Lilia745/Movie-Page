import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MoviePage from './Components/MoviePage';
import Comedy from './Components/Comedy';
import Drama from './Components/Drama';
import Family from './Components/Family';
import Header from './Components/Header';
function App() {
  return (
    <Router>
      <Routes >
        <Route path="/" element={<Header />}/>
        <Route path="/movie/:id" element={<MoviePage/>} />
        <Route path="/comedy" element={<Comedy/>}/>
        <Route path="/drama" element={<Drama/>}/>
        <Route path="/family" element={<Family/>}/>
      </Routes>
    </Router>
  );
}

export default App;
