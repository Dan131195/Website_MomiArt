import "./assets/styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Hompage";
import Footer from "./components/Footer";
import { DataProvider } from "./provider/DataProvider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
