
import './App.css';
import Navbar from ".//companent/navbar/Navbar.jsx";
import Header_1 from "./companent/header_1/Header_1.jsx";
import Section_1 from "./companent/Section_1/Section_1.jsx";
import Section_2 from "./companent/Section_2/section_2.jsx";
import Carousel from "./companent/Corousel/Carousel.jsx"
import Footer from "./companent/Footer/Footer"

// import Section from "./lesson_3/Section/index.jsx";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Header_1/>
       <Section_1/>
       <Section_2/>
       <Carousel/>
       <Footer/>
    </div>
  );
}

export default App;
