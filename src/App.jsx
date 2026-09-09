import { BrowserRouter, Routes, Route } from "react-router-dom";

import BlogDetails from "./pages/blogdetails";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CreateBlog from "./pages/CreateBlog";
import EditBlog from "./pages/editblog";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/create-blog" element={<CreateBlog />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route
          path="/edit-blog/:id"
          element={<EditBlog />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;