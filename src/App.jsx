import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import LogIn from "./pages/LogIn";
import SingUp from "./pages/SingUp";
import Sucursal from "./pages/sucursales/Sucursal";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUp />} />
        <Route path="/sucursal/:namesSucursal" element={<Sucursal />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
