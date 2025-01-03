import Landing from "./pages/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Speakers from "./pages/Speakers";
import Event from "./pages/Event";
import NotFound from "./pages/NotFound";
import Merchandise from "./pages/Merchandise";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/store" element={<Merchandise />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/events/:id" element={<Event />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
