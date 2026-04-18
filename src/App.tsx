import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Feeding } from "./pages/Feeding";
import { Health } from "./pages/Health";
import { Development } from "./pages/Development";
import { AIHelp } from "./pages/AIHelp";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-stone-200">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feeding" element={<Feeding />} />
            <Route path="/health" element={<Health />} />
            <Route path="/development" element={<Development />} />
            <Route path="/ai" element={<AIHelp />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
