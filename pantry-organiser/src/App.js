import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React } from 'react';

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//pages 
import "./pages/App.css";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
