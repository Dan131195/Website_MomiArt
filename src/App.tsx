import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Hompage";
import Footer from "./components/Footer";
import { PaintingsProvider } from "./provider/PaintingsProvider";

function App() {
  return (
    <PaintingsProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </PaintingsProvider>
  );
}

export default App;
