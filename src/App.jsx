import { Route, BrowserRouter as Router, Routes } from "react-router"
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Extensions from "./components/Extension";
import Contact from "./components/Contact";
import Drawer from "./components/Drawer";
import Footer from "./components/Footer";

function App() {


  return (
    <Router>

      <div className="max-w-3xl mx-auto px-4 py-4 md:py-8">
        <Drawer />
        <div className="flex gap-20 ">
          <Sidebar />
          <div className="grow my-8">
            <Routes>
              <Route index element={<Home />} />
              <Route path="projects" element={<Projects />} />
              <Route path="extensions" element={<Extensions />} />
              <Route path="contact" element={<Contact />} />

            </Routes>
          </div>

        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
