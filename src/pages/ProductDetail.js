import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { useParams } from 'react-router-dom';

const ProductDetail = () =>{
    // const params = useParams();

    return (
        <>
            <Container>
             <Row className="justify-content-md-center mt-5">
              <Col md="auto"><h1>Product Details</h1></Col>
             </Row>
             </Container>
        </>
    )
}
export default ProductDetail;