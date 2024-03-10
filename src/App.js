
import './App.scss';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './components/Home';
import About from './components/About';
import Donor from './components/Donor';
import Dsignup from './components/Dsignup';
import Dsignin from './components/Dsignin';
import Contact from './components/Contact';
function App() {
  return (
    <>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="donor" element={<Donor />} />
          <Route path="dsignup" element={<Dsignup />} />
          <Route path="dsignin" element={<Dsignin />} />

        </Route>

      </Routes>
    </>
  );
}

export default App;
