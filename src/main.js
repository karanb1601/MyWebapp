import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from "./logo.svg"
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route
} from 'react-router-dom'
import SignUP from "./SignUp";
import StuTable from "./StuTable";
import Home from "./Home";
import Bundle from "./bundle";
import Marks from "./MarksContext";
import ColorInversionFooter from "./footer";
import SignInSide from "./signin";

function Main() {
  return (
    <Router>


      <div>
        <header data-bs-theme="dark">




          <Navbar expand="lg" className="bg-body-tertiary" >
            <Container fluid>
              <Navbar.Brand href="/">
                <img
                  alt=""
                  src={logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{''}
                React Bootstrap
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav 
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav.Link >
                    <Link className="nav-link "  to="/">Home </Link>
                  </Nav.Link>
                  <Nav.Link className="nav-link mt-2" href="#/">About Us</Nav.Link>
                  <Nav.Link href="# ">
                    <Link className="nav-link" to="Stutable">StuTable</Link>
                  </Nav.Link>
                  <NavDropdown className="nav-link" title="Services" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Gallary</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Something else here
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link  >
                    <Link className="nav-link " to="signup">SignUP</Link>
                  </Nav.Link>
                  <Nav.Link  >
                    <Link className="nav-link " to="signin">SignIn</Link>
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>


        </header>

        <main>

          <section>
            <Routes>
              <Route path="SignUp" element={<SignUP />} />
              <Route path="/" element={<Home />} />
              <Route path="StuTable" element={<StuTable />} />
              <Route path="signin" element={<SignInSide />} />

            </Routes>
          </section>

        </main>

        {/* 
         <div>
          <Bundle />
        </div>

        <div>
          <Marks />
        </div>  */}

        

        <footer>
          <ColorInversionFooter />
        </footer>





      </div>
    </Router>





  )
}
export default Main;