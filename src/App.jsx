import React from "react";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import MyWork from "./component/MyWork";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import NavBar from "./component/NavBar";

const App = () => {
  return (
    <div className=" bg-black ">
      <section className="">
        <NavBar />
        <Home />
        <About />
        <Services />
        <MyWork />
        <Contact />
        <Footer />
      </section>
    </div>
  );
};

export default App;
