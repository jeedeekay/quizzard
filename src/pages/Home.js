import { 
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardHeader,
    CardImg
} from 'reactstrap';

const Home = () => {
    return (
        <Container className='mt-3'>
            <Row>
                <Col>
                    <Card style={{ border: '3px solid #4391C2', borderRadius: 10 }}>
                        <CardHeader className='text-start' style={{ backgroundColor: '#4391C2', color: 'white', fontWeight: 'bold' }}>Featured Quizzes</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md='4'>Quiz 1</Col>
                                <Col md='4'>Quiz 2</Col>
                                <Col md='4'>Quiz 3</Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Card style={{ border: '3px solid #8FC243', borderRadius: 10 }}>
                        <CardHeader className='text-start' style={{ backgroundColor: '#8FC243', color: 'white', fontWeight: 'bold' }}>Featured Listicles</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md='4'>Listicle 1</Col>
                                <Col md='4'>Listicle 2</Col>
                                <Col md='4'>Listicle 3</Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-3'>
                <Col>
                    <Card style={{ border: '3px solid #7443C2', borderRadius: 10 }}>
                        <CardHeader className='text-start' style={{ backgroundColor: '#7443C2', color: 'white', fontWeight: 'bold' }}>Featured Pointless Crap</CardHeader>
                        <CardBody>
                            <Row>
                                <Col md='4'>Pointless Thing 1</Col>
                                <Col md='4'>Pointless Thing 2</Col>
                                <Col md='4'>Pointless Thing 3</Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;