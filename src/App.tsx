import "./assets/styles/App.css";
import "./assets/styles/index.css";
import "./assets/styles/navbar.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Hompage";
import Footer from "./components/Footer";
import { DataProvider } from "./provider/DataProvider";
import Error from "./pages/Error";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<Error />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
