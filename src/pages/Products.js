import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
const Products = () =>{
    return (
        <>
             <Container>
             <Row className="justify-content-md-center mt-5">
              <Col md="auto"><h1>Product Page</h1></Col>
              <ListGroup as="ol" numbered className='mt-5 text-center'>
              <ListGroup.Item as="li"><Link to='/products/p1' className='link'>Book 📚</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to='/products/p2' className='link'>Jeans 👕</Link></ListGroup.Item>
              <ListGroup.Item as="li"><Link to='/products/p3' className='link'>Online Course 💻</Link></ListGroup.Item>
              </ListGroup>
             </Row>
             </Container>
        </>
    )
}
export default Products;