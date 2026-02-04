import { BrowserRouter, Routes, Route } from "react-router-dom";
import SEO from "./components/SEO";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";

export default function App() {
  return (
    <BrowserRouter>
      <SEO />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/yasal" element={<LegalPage />} />
        <Route path="/legal" element={<LegalPage />} />
      </Routes>
    </BrowserRouter>
  );
}
