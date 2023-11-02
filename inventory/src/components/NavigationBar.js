import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme='dark'>
      <Container>
        <Navbar.Brand href="/home">Inventory Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>

            <NavDropdown title="Components" id="nav-dropdown">
              <NavDropdown.Item href="/view-components">View Components</NavDropdown.Item>
              <NavDropdown.Item href="/add-component">Add Component</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Parts" id="nav-dropdown">
              <NavDropdown.Item href="/view-parts">View Parts</NavDropdown.Item>
              <NavDropdown.Item href="/add-part">Add Parts</NavDropdown.Item>
            </NavDropdown>        

            <NavDropdown title="Equipment" id="nav-dropdown">
              <NavDropdown.Item href="/view-equipment">View Equipment</NavDropdown.Item>
              <NavDropdown.Item href="/add-equipment">Add Equipment</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Areas" id="nav-dropdown">
              <NavDropdown.Item href="/view-areas">View Areas</NavDropdown.Item>
              <NavDropdown.Item href="/add-area">Add Area</NavDropdown.Item>
            </NavDropdown>
              
            <NavDropdown title="Workers" id="nav-dropdown">
              <NavDropdown.Item href="/view-workers">View Workers</NavDropdown.Item>
              <NavDropdown.Item href="/add-worker">Add Worker</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


export default TopBar;