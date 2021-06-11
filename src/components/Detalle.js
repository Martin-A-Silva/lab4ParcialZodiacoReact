import React, { Component } from 'react';
import MenuSuperiorDeOpciones from './MenuSuperiorDeOpciones';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from "react-bootstrap/Col";
import axios from 'axios';

class Detalle extends Component{

    constructor() {
        super();
        this.state = ({
            db:[],     
            signo: []            
        });
    }

    componentDidMount(){
        this._isMounted = true;
        this.getSignosServer();
      }
    
      //Este método es llamado cuando un componente se elimina del DOM
      componentWillUnmount(){
        this._isMounted = false;
      }
    
      getSignosServer(){
        //axios.get('http://localhost:8080/instrumento');
        axios.get('/test/tb/zodiaco.json') 
        .then(result=>{
            //console.log(result.data);
            this.setState({db: result.data})  
            this.setState({signo: this.state.db[this.props.match.params.id-1]})
        })       
        .catch(console.log);
        //console.log(this.state.db);
    
    }

    render(){
                
        const signoEncontrado = this.state.signo;        
        const listaMeses = {1:'Enero',2:'Febrero',3:'Marzo',4:'Abril',5:'Mayo',6:'Junio',7:'Julio',8:'Agosto',9:'Setiembre',10:'Octubre',11:'Noviembre',12:'Diciembre'};                      
        
        if (Object.keys(signoEncontrado).length === 0) {
            return ("");
        }        
        
        
        return (
            <React.Fragment>
                <MenuSuperiorDeOpciones></MenuSuperiorDeOpciones>
                Detalle {this.props.match.params.id}                              
                <Container>
                <Row><br></br></Row>
                    <Row>
                        <Col>
                            <img src={signoEncontrado.imagen} alt="imagen" style={{marginLeft:'3rem'}}/>                                                        
                            <Row>
                            {signoEncontrado.signo}
                            </Row>
                        </Col>
                        <Col style={{ borderLeftStyle: 'solid', borderLeftWidth: '1px', borderLeftColor: 'lightgrey' }}>
                            <Col>
                            <Row >
                                <Col style={{color:'grey'}}>Elemento:   {signoEncontrado.elemento}</Col>
                            </Row>
                            <Row >
                                <Col><h2>Simbolo: {signoEncontrado.simbolo}</h2></Col>
                            </Row>
                            <Row>
                                <Col>Mes: <br></br>
                                {listaMeses[signoEncontrado.meses[0]]}<br></br>
                                {listaMeses[signoEncontrado.meses[1]]}

                                </Col>
                            </Row>
                            
                            <Row>
                                <Col><h6>Descripcion: {signoEncontrado.descripcion}</h6></Col>
                            </Row>                            
                            
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default Detalle;