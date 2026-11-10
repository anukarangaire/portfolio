import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home"; 
import Certificates from "./components/Certificates";
import Footer from "./components/Footer";
import Portrait from "./components/Portrait";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/certificates" element={<Certificates />} />
    <Route path="/portrait" element={<Portrait />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
