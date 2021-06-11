import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';


class Tarjeta extends Component {



    render() {

        //Logica
        

        //HTML
        return (
            <React.Fragment>
                <Card >
                    <Col >
                        <Row sm='2' >
                            <Card.Link href={`detalle/${this.props.id}`}>
                                <Card.Img variant="top" className="maxAltoImg" src={this.props.imagen} alt="descripcion" style={{maxWidth: '200px'}}/>
                            </Card.Link>
                        </Row>
                        <Row >
                            <Card.Body>
                                <Card.Title >{this.props.signo}</Card.Title>
                                <Card.Text>
                                    <Button href={`detalle/${this.props.id}`} variant="outline-primary" style={{margin:'1rem'}}>VER DETALLE</Button>
                                </Card.Text>
                            </Card.Body>
                        </Row>
                    </Col>
                </Card>
            </React.Fragment >

        );

    }
}

export default Tarjeta;