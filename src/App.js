import './App.css';
import { Form,Button,Nav,Navbar,FormControl } from 'react-bootstrap/'

function App() {
  return (
    <div className="App">
 <Navbar bg="light" variant="light">
    <Navbar.Brand href="#home">GOMYCODE</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-primary">Search</Button>
    </Form>
  </Navbar>
      <header className="App-header">
  
      <form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
   </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form.Group>
  </form >
  
      </header>
      <p>@copyright 2021</p> 
    </div>
    
  );
}


export default App;
