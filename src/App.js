import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import { Link, Route, Routes } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function App() {
  return (
     <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand to="home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="home">Home</Nav.Link>
            <Nav.Link to="about">About</Nav.Link>
            <Nav.Link to="contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Link to="home">HOME</Link>
      <Link to="about">ABOUT</Link>
      <Link to="courses">COURSES</Link>
      <Link to="gallery">GALLERY</Link>
      <Link to="contact">CONTACT</Link>
     <hr/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="courses" element={<Courses/>}/>
        <Route path="gallery" element={<Gallery/>}/>
        <Route path="contact" element={<Contact/>}/>
      </Routes>
      </>
  );
}

export default App;
