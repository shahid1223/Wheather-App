import React, {useContext , useState} from 'react'
import { Container, Navbar, Nav , Form , Button} from 'react-bootstrap';
import WheatherContext from './context/wheatherData/wheatherContext';
const Header = () => {
    const context = useContext(WheatherContext)
    const {setSearch , search , change} = context;
    const [input , setInput] = useState("")
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Weather</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                       
                        
                    </Nav>
                    <Form className="mx-2 ">
                            <Form.Group>
                                <Form.Control type="text" placeholder="Search City" value={input} onChange={(e)=>setInput(e.target.value)}/>
                            </Form.Group>
                        </Form>
                            <Button variant="success" onClick={()=>change(input)}>Success</Button>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
