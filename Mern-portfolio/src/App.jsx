import Layout from "./components/Layout"
import About from "./pages/About/About"
import Techstack from "./pages/TechStack/Techstack"
import Project from "./pages/Project/Project"
import Education from "./pages/Education/Education"
import WorkExp from "./pages/WorkExp/WorkExp"
import Contact from "./pages/Contact/Contact"
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./Context/ThemeContext"
import MobileNav from "./components/MobailNav"
import { ToastContainer } from 'react-toastify';

function App() {
  
const [theme] = useTheme();
  return (
    <>
    <div id={theme}>
      <ToastContainer/>
      <MobileNav/>  
    <Layout/>
   <div className="container">
    <About/>
    <Education/>
    <Techstack/>
    <Project/>
    <WorkExp/>
    <Contact/>
   </div>
    <div className="footer pb-3 ms-3">
        
            <h4 className="text-center">Made With 💙 Ritik Singh &copy; 2025</h4>
          
        </div>
         </div>
            <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  )
}

export default App
