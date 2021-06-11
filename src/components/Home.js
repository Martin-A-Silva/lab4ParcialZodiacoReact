import axios from 'axios';
import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import Tarjeta from './Tarjeta';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container';

class Home extends Component {

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

                this.setState({ db: result.data })
            })
            .catch(console.log);


    }

    render() {

        const listaMeses = { 1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Setiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre' };
        var signos
        var mesParam

        if (Object.entries(listaMeses).some(e => window.location.href.includes(e[1]))) { //Si hay un mes en string en la URL

            mesParam = Object.entries(listaMeses).find(m => window.location.href.includes(m[1]))[0];    //Guardo su numero correspondiente 
            signos = this.state.db.map((signoi, i) => {

                if (signoi.meses.includes(parseInt(mesParam))) {

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
            })
        }
        else {   //Si no hay mes en la URL
            signos = this.state.db.map((signoi, i) => {
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
            })
        }

        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                <h3>Home</h3>
                <Container className='pt-5'>
                    <Row xs={1} md={4} className='g-4'>
                        {signos}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default Home;