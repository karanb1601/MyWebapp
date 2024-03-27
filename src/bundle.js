import React from "react";
import { add } from "./math.js";
import Button from "react-bootstrap/esm/Button.js";
import Card from 'react-bootstrap/Card'

function Bundle() {
    // console.log(add(10,50));
    const out = add(10, 5 );
    const items=12;   // const items value is 0 then  print is sold out 
    const con=(items<=0)?<h3>SOLD OUT</h3>:<h3>items:{items}</h3>
    return (
        <>
            <div>
                <h1> {(out < 30) ?
                    <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title  <span>{con}</span></Card.Title>
                                <Card.Text>
                                   LESS THAN 30...
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </>
                    :
                    <>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                   GRETHER THAN 30..
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </>} </h1>
            </div>
        </>
    )
}
export default Bundle;