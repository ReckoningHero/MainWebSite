import "../App.css";
import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Display() {
  return (
    <div className="pl-[25%]    w-screen back text-white  ">
      <About />
      <Resume />
      <Projects />
      <Contact />
    </div>
  );
}
