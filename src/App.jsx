import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/home";
import Contacts from "./Components/Pages/contacts";
import About from "./Components/Pages/about";
import Projects from "./Components/Pages/projects";
import ProjectDetails from "./Components/Pages/projectDetails";
import MainLayout from "./Components/Layouts/mainLayout";
import "./assets/style.scss"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<MainLayout/>} >
          
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projectDetails" element={<ProjectDetails />} />
        </Route>
     

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
