import "./App.css"
import "./index.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import Pedidos from "./pages/Pedidos";
import Stock from "./pages/Stock";
function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/pedidos" element={<Pedidos />} />
          <Route path="/stock" element={<Stock />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;