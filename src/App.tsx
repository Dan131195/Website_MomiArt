import "./assets/styles/App.css";
import "./assets/styles/navbar.css";
import "./assets/styles/loading.css";
import "./assets/styles/home.css";
import "./assets/styles/paintings.css";
import "./assets/styles/footer.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useData } from "./context/DataContext";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Footer from "./components/Footer";
import Error from "./pages/Error";

import Loading from "./pages/Loading";
import Paintings from "./pages/Paintings";
import Contacts from "./pages/Contacts";

function App() {
  const { loading } = useData();

  return (
    <BrowserRouter>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div>
          <div id="navbar">
            <Navbar />
          </div>

          <div id="main">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="*" element={<Error />} />
              <Route path="/Opere" element={<Paintings />} />
              <Route path="/Contatti" element={<Contacts />} />
            </Routes>
          </div>

          <div id="footer">
            <Footer />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
}

export default App;
