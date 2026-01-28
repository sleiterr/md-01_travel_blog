import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PostDetail from "./pages/PostDetail/PostDetail";

import { Toaster } from "sonner";

function App() {
  return (
    <main>
      <Toaster richColors position="top-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post-detail/:id" element={<PostDetail />} />
      </Routes>
    </main>
  );
}

export default App;
