import NavBar from "../layout/NavBar";
import Search from "./Search";
import About from "./About";
import Contact from "./Contact";
import bgImage from "../../assets/bg1.jpg";
import Popular from "./Popular";

export default function Home() {
  return (
    <div>
      <NavBar className="sticky top-0 z-20" />

      <section
        id="home"
        className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

        <Search />
      </section>

      <section id="popular" className="w-full bg-gray-100">
        <Popular />
      </section>

      <section id="about" className="w-full bg-white">
        <About />
      </section>

      <section id="contact" className="w-full bg-gray-100">
        <Contact />
      </section>
    </div>
  );
}
