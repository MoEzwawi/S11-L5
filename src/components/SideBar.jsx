import { useDispatch } from "react-redux"
import { searchMusicAction } from "../redux/actions"
import { Col, Navbar, Button, Nav, Form, FormControl } from "react-bootstrap"
import { HouseFill, BookFill } from "react-bootstrap-icons"

const Sidebar = () => {
    const dispatch = useDispatch()

    return (
        <Col xs={2}>
            <Navbar className="navbar navbar-expand-md fixed-left justify-content-between"
                id="sidebar">
                <div className="container flex-column align-items-start">
                    <Navbar.Brand href="index.html">
                        <img
                            src="../assets/logo/logo.png"
                            alt="Spotify Logo"
                            width="131"
                            height="40"
                            className="d-inline-block align-top ms-3"
                            id="logogo-spotify"
                        />
                    </Navbar.Brand>
                    <Button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </Button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <Nav className="navbar-nav">
                            <ul className="p-0">
                                <li>
                                    <Nav.Link
                                        className="nav-item nav-link d-flex align-items-center"
                                        href="#"
                                    ><HouseFill size={30} />&nbsp; Home
                                    </Nav.Link>
                                </li>
                                <li>
                                    <Nav.Link
                                        className="nav-item nav-link d-flex align-items-center"
                                        href="#"
                                    ><BookFill size={30} />&nbsp; Your Library</Nav.Link>
                                </li>
                                <li>
                                    <Form className="input-group mt-3" onSubmit={(e) => {
                                        e.preventDefault()
                                        dispatch(searchMusicAction(e.target.value))
                                    }} >

                                        <FormControl
                                            type="text"
                                            className="form-control"
                                            id="searchField"
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                        />
                                        <div className="input-group-append">
                                            <Button
                                                variant="outline-secondary" type="submit" size="sm"
                                                className="h-100"
                                            >
                                                GO
                                            </Button>
                                        </div>
                                    </Form>
                                </li>
                            </ul>
                        </Nav>
                    </div>
                </div>
                <div className="nav-btn">
                    <button className="signup-btn" type="button">Sign Up</button>
                    <button className="login-btn" type="button">Login</button>
                    <a href="#">Cookie Policy</a> |
                    <a href="#"> Privacy</a>
                </div>

            </Navbar>
        </Col>
    )
}

export default Sidebar