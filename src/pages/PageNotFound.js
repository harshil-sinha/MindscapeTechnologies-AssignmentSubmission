import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PageNotFound = () =>{
    return (
        <>
             <Container>
             <Row className="justify-content-md-center mt-5">
              <Col md="auto"><h1>Page Not Found...</h1></Col>
             </Row>
             </Container>
        </>
    )
}
export default PageNotFound;