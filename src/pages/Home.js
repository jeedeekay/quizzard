import { 
    Container,
    Row,
    Col
} from 'reactstrap';

const Home = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <Col xs='2'>Featured Quizzes</Col>
            </Row>
            <Row>
                <Col className='border'>
                    QUIZ 1
                </Col>
                <Col className='border'>
                    QUIZ 2
                </Col>
                <Col className='border'>
                    QUIZ 3
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col xs='2'>Featured Listicles</Col>
            </Row>
            <Row>
                <Col className='border'>
                    Listicle 1
                </Col>
                <Col className='border'>
                    Listicle 2
                </Col>
                <Col className='border'>
                    Listicle 3
                </Col>
            </Row>
        </Container>
    );
}

export default Home;