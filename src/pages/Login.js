import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Login = () =>{
    return (
        <>
             <Container>
             <Row className="justify-content-md-center mt-5">
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" required isInvalid/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" required isInvalid/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit">Log in</Button>
                </Col>
                <Col sm={{ span: 10, offset: 2 }} className='mt-2'>
                <NavLink to="/signup" className='linkk'>Create new account</NavLink>
                </Col>
            </Form.Group>
            </Form>
            </Row>
            </Container>
        </>
    )
}
export default Login;