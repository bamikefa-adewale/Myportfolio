import React from "react";
import NavBar from "./component/NavBar";
import Hero from "./component/Hero";
import About from "./component/About";
import Services from "./component/Services";

const App = () => {
  return (
    // <div className=" h-screen w-screen">
    <div className=" bg-black ">
      <section className="">
        <NavBar />
        <Hero />
        <About />
        <Services />
        {/* <Contact />
        <Testimonial /> */}
      </section>
    </div>
  );
};

export default App;
