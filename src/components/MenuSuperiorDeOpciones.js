import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown'

class MenuSuperiorDeOpciones extends React.Component {

    render() {
        return (
            <React.Fragment>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand href="/home">Zodiaco</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/agrupadosporelemento">Agrupados por Elemetno</Nav.Link>                        
                    </Nav>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            -Seleccione un mes-
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="/?Enero">Enero</Dropdown.Item>
                            <Dropdown.Item href="/?Febrero">Febrero</Dropdown.Item>
                            <Dropdown.Item href="/?Marzo">Marzo</Dropdown.Item>
                            <Dropdown.Item href="/?Abril">Abril</Dropdown.Item>
                            <Dropdown.Item href="/?Mayo">Mayo</Dropdown.Item>
                            <Dropdown.Item href="/?Junio">Junio</Dropdown.Item>
                            <Dropdown.Item href="/?Julio">Julio</Dropdown.Item>
                            <Dropdown.Item href="/?Agosto">Agosto</Dropdown.Item>
                            <Dropdown.Item href="/?Setiembre">Setiembre</Dropdown.Item>
                            <Dropdown.Item href="/?Octubre">Octubre</Dropdown.Item>
                            <Dropdown.Item href="/?Noviembre">Noviembre</Dropdown.Item>
                            <Dropdown.Item href="/?Diciembre">Diciembre</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
                </Navbar>
            </React.Fragment>

        );

    }

}

export default MenuSuperiorDeOpciones;