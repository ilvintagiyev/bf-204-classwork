import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasty from './pages/Tasty';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Specialties from './pages/Specialties';
import Reservation from './pages/Reservation';
import Blog from './pages/Blog';
import About from './pages/About';
import Add from './pages/Add';
import NoPage from './pages/NoPage';
import MainLayouts from './layout/MainLayouts';
import Navbar from "../src/components/Navbar"

function App() {

  return (
    <>
 <BrowserRouter>
 <Navbar/>
        <Routes>

          <Route path="/" element={<Home />}>
          <Route path="/Tasty" element={<Tasty />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Specialties" element={<Specialties />} />
          <Route path="/Reservation" element={<Reservation />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/About" element={<About />} />
          <Route path="/Add" element={<Add />} />
          <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
     
    </>
  )
}
 

export default App
