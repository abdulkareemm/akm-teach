import { About, Contact, Course, Footer, Home, Navbar } from "./components";

const App = () => {
  return (
    <div className="font-Poppins bg-Solitude">
    <Navbar />
    <Home />
    <About />
    <Course />
    <Contact />
    <Footer />
    </div>
  );
};

export default App;
