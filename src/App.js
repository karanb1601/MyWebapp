import logo from './logo.svg';
import './App.css';
import { Col, Container, Row } from 'react-bootstrap';
import { Stack } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';


var num=1;
function App() {
      
      var [val, setval]=useState(num)
      setInterval(()=>setval(num+=1),1000);



  return (
    
    <div className="App">
       {/* <Container className='bg-primary'>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container> */}
   

    <Container  >
      <Row xs={2} md={4} lg={6}>
        <Col className='bg-primary'>1 of 2</Col>
        <Col className='bg-success'>2 of 2</Col>
        
      </Row>
      <Row xs={1} md={2}>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
      <Row xs="auto">
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>
      </Row>
    </Container>

    <Container>
    <Stack gap={3} style={{backgroundColor:"red"}}>
      <div className="p-2 bg-a">First item</div>
      <div className="p-2 bg-a">Second item</div>
      <div className="p-2 bg-a">Third item</div>
    </Stack>
    </Container>

    <Container>
    <Form className='m-5'>
      {['switch', 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            
            label="1"
            name="group1"
            type={type}
            id={`default-${type}-1`}
          />
          <Form.Check
           
            label="2"
            name="group1"
            type={type}
            id={`default-${type}-2`}
          />
          <Form.Check
           
            disabled
            label="3 (disabled)"
            type={type}
            id={`default-${type}-3`}
          />
        </div>
      ))}
    </Form>

    <>
      <Form.Label >Range</Form.Label>
      <Form.Range value={val}/>
    </>
    </Container>

   

    </div>
  );
}

export default App;
