import {
    Container,
    Col,
    Row,
    Collapse,
    Nav,
    Navbar,
    NavItem
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Container>
                <Row>
                    <Col>QUIZZARD</Col>
                </Row>
                <Row>
                    <Col>
                        <Navbar dark sticky='top' expand='md' className='mb-0 pb-0'>
                            <Collapse navbar>
                                <Nav className='me-auto w-100 nav-fill' navbar>
                                    <NavItem>
                                        <NavLink>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>Quizzes</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>Listicles</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink>User</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </header>
    );
}

export default Header;