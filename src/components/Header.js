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
import lizardWizard from '../app/assets/imgs/lizardWizard.jpg';

const Header = () => {
    return (
        <header>
            <Container className='border-bottom'>
                <Row>
                    <Col>QUIZZARD</Col>
                </Row>
                <Row>
                    <img src={lizardWizard} className='w-25 m-auto' alt='Lizard Wizard' />
                </Row>
                <Row>
                    <Col>
                        <Navbar dark sticky='top' expand='md' className='mb-0 pb-0'>
                            <Collapse navbar>
                                <Nav className='me-auto w-100 nav-fill' navbar>
                                    <NavItem>
                                        <NavLink to='/'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/quizzes'>Quizzes</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/listicles'>Listicles</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/Pointless'>Pointless</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to='/profile'>Profile</NavLink>
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