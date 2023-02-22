import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "./About";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { Blog } from "./Blog";
import { BlogShowPage } from "./BlogShowPage";

function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:id" element={<BlogShowPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
