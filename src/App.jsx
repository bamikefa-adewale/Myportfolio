import About from "./component/About";
import Services from "./component/Services";
import MyWork from "./component/MyWork";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";
import Home from "./component/Home";

const App = () => {
  return (
    <main className="bg-black">
      <NavBar />
      <div className="">
        <Home />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default App;
