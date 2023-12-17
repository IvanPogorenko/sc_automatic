import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Services from "./pages/Services";


function App() {
  return (
    <Router>
      <div className="App">
        <div className="upHeader">
          <ul>
            <li>avtomatica@gmail.com</li>
            <li>+79999999999</li>
            <li>г. Ленинск-Кузнецкий, ул. Белинского, д. 17</li>
          </ul>
        </div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about-us" element={<About/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
