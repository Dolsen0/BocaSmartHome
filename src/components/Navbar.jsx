import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarBSH() {
  return (
    <>
      <Navbar bg="light" expand='lg'>
        <Container>
          <Navbar.Brand href="#home">Boca Smart Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Nav.Link href="#video">Video</Nav.Link>
          <Nav.Link href="#audio">Audio</Nav.Link>
          <Nav.Link href="#Lighting">Lighting</Nav.Link>
          <Nav.Link href="#Consultation">Consultation</Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}
