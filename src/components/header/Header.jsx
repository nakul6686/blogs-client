import React from "react";
import {useNavigate} from "react-router-dom"
import {
  Container,
  Nav,
  Navbar,
  Button,
  ButtonGroup,
  Dropdown,
} from "react-bootstrap";
import "./header.css";
import { useUser } from "../../utils/userProvider";
import { FaSignOutAlt } from "react-icons/fa";
import { Link} from "react-router-dom";
import { useSnackbar } from "../../utils/Snackbar";

function Header() {
  const { user, handleUser } = useUser();
  const navigate = useNavigate();
  const showSnackbar = useSnackbar();

  return (
    <Navbar expand="lg" className="bg-white application-header" sticky="top">
      <Container>
        <Navbar.Brand  className="fw-bold brand-logo">
         <Link style={{textDecoration: 'none'}}to={'/'}>VBlogs</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mx-auto">
          <Link to={'/'} style={{color: `var(--link-color)`}}>Home</Link>
            <Link to={'blog-search'} style={{color: `var(--link-color)`}}>Explore all blogs</Link>
          </Nav>

          <div className="d-lg-flex">
            <Nav className="mx-auto d-flex d-flex align-items-lg-center align-items-md-center">
              <Link to={user ? "/blog-create" : "/login"} style={{color: `var(--link-color)`}}>Write</Link>
            </Nav>
            {!user ? (
              <Link
                className="login-btn text-decoration-none"
                to="/login"
              >
                Login
              </Link>
            ) : (
              <Dropdown as={ButtonGroup} className="ctm-btn-group">
                <img src={user.userImage?.url} alt="" className="profile-img" />
                <Dropdown.Toggle
                  className="profile-btn"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  {/* <div className="link-div"><Link to={'/profile'}>Profile</Link></div> */}
                  <Dropdown.Item onClick={() => {
                    handleUser(null);
                    localStorage.removeItem("userData")
                    showSnackbar("success", "You are successfully logged out.")
                  }}>
                    log Out <FaSignOutAlt className="me-1" />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            )}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
