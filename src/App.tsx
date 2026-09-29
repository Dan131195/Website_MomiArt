import "./assets/styles/App.css";
import "./assets/styles/home.css";
import "./assets/styles/navbar.css";
import "./assets/styles/footer.css";

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
        <div id="navbar">
          <Navbar />
        </div>
        <div id="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
