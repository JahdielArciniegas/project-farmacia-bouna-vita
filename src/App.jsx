import { Routes, BrowserRouter, Route, Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";

import { lazy, Suspense } from "react";
import LoadingPage from "./pages/LoadingPage";

const Home = lazy(() => import("./pages/Home"));
const LogIn = lazy(() => import("./pages/LogIn"));
const SingUp = lazy(() => import("./pages/SingUp"));
const Sucursal = lazy(() => import("./pages/sucursales/[Sucursal]"));
const SendCv = lazy(() => import("./pages/SendCv"));
const Usuario = lazy(() => import("./pages/dashboard/[Usuario]"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
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
          <Route path="/send-your-cv" element={<SendCv />} />
          <Route path="/dashboard/:nombre" element={<Usuario />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
    </>
  );
}

export default App;
