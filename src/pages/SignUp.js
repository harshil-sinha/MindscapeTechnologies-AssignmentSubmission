import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import {useState,useRef} from 'react'

const SignUp = () =>{
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);

const switchAuthModeHandler = () =>{
    setIsLogin((prevState)=> !prevState);
}
    const submitHandler =  (event) =>{
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        

        if(isLogin){

        }
        else{
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp key=AIzaSyA2nV9xD-Thgeh0rA1tPaSzpASAxCSTO4M',
            {
                method : 'POST',
                body : JSON.stringify({
                    email : enteredEmail,
                    password : enteredPassword,
                    returnSecureToken : true
                }),
                headers:{
                    'Content-Type' : 'application/json'
                }
            }
            ).then(res =>{
                if(res.ok){

                }
                else{
                    return res.json().then(data =>{
                        console.log(data);
                    })
                }
            });
        }
    }
    return (
        <>

             <Container>
             <Row className="justify-content-md-center mt-5">
            <Form onSubmit={submitHandler}>
            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
                <Form.Label column sm={2}>
                Email
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="email" placeholder="Email" required isInvalid ref={emailInputRef}/>
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
                <Form.Label column sm={2}>
                Password
                </Form.Label>
                <Col sm={10}>
                <Form.Control type="password" placeholder="Password" required isInvalid ref={passwordInputRef}/>
                </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                <Button type="submit" onClick={switchAuthModeHandler}>Sign Up</Button>
                </Col>
                <Col sm={{ span: 10, offset: 2 }} className='mt-2'>
                <NavLink to="/login" className='linkk'>Login with existing account</NavLink>
                </Col>
            </Form.Group>
            </Form>
            </Row>
            </Container>
        </>
    )
}
export default SignUp;