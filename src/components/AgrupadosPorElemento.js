import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Tarjeta from './Tarjeta';

class AgrupadosPorElemento extends Component {

    constructor() {
        super();
        this.state = ({
            db: [],
        });
    }

    componentDidMount() {
        this._isMounted = true;
        this.getSignosServer();
    }

    //Este método es llamado cuando un componente se elimina del DOM
    componentWillUnmount() {
        this._isMounted = false;
    }

    getSignosServer() {
        //axios.get('http://localhost:8080/instrumento');
        axios.get('/test/tb/zodiaco.json')
            .then(result => {
                console.log(result.data);
                this.setState({ db: result.data })
            })
            .catch(console.log);
        console.log(this.state.db);

    }

    render() {

        const fuegos = this.state.db.map((signoi, i) => {
            if (signoi.elemento === 'Fuego') {
                return (
                    <Tarjeta
                        key={signoi.id}
                        id={signoi.id}
                        signo={signoi.signo}
                        elemento={signoi.elemento}
                        simbolo={signoi.simbolo}
                        imagen={signoi.imagen}
                        descripcion={signoi.descripcion}
                        meses={signoi.meses}>

                    </Tarjeta>
                )
            }
        });
        const aguas = this.state.db.map((signoi, i) => {
            if (signoi.elemento === 'Agua') {
                return (
                    <Tarjeta
                        key={signoi.id}
                        id={signoi.id}
                        signo={signoi.signo}
                        elemento={signoi.elemento}
                        simbolo={signoi.simbolo}
                        imagen={signoi.imagen}
                        descripcion={signoi.descripcion}
                        meses={signoi.meses}>

                    </Tarjeta>
                )
            }
        });
        const tierras = this.state.db.map((signoi, i) => {
            if (signoi.elemento === 'Tierra') {
                return (
                    <Tarjeta
                        key={signoi.id}
                        id={signoi.id}
                        signo={signoi.signo}
                        elemento={signoi.elemento}
                        simbolo={signoi.simbolo}
                        imagen={signoi.imagen}
                        descripcion={signoi.descripcion}
                        meses={signoi.meses}>

                    </Tarjeta>
                )
            }
        });
        const aires = this.state.db.map((signoi, i) => {
            if (signoi.elemento === 'Aire') {
                return (
                    <Tarjeta
                        key={signoi.id}
                        id={signoi.id}
                        signo={signoi.signo}
                        elemento={signoi.elemento}
                        simbolo={signoi.simbolo}
                        imagen={signoi.imagen}
                        descripcion={signoi.descripcion}
                        meses={signoi.meses}>

                    </Tarjeta>
                )
            }
        });
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                Agrupados por elemento
                <Container>
                    <Row><br></br></Row>
                    <Row>
                        <Col>
                            Fuego
                        </Col>
                        <Col>
                            {fuegos}
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            Agua
                        </Col>
                        <Col>
                            {aguas}
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            Tierra
                        </Col>
                        <Col>
                            {tierras}
                        </Col>
                    </Row><br></br>
                    <Row>
                        <Col>
                            Aire
                        </Col>
                        <Col>
                            {aires}
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )

    }
}

export default AgrupadosPorElemento;