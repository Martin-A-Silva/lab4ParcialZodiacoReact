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
                                <Col><h2>Simbolo: {signoEncontrado.simbolo}</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col>Mes: <br></br>
                                {(signoEncontrado.meses.includes(1))?'Enero ':'' /*Sé que es rustico, pero no hay tiempo*/}                                 
                                {(signoEncontrado.meses[0]===2)?'Febrero ':''} 
                                {(signoEncontrado.meses[1]===2)?'Febrero ':''} 
                                {(signoEncontrado.meses[0]===3)?'Marzo ':''} 
                                {(signoEncontrado.meses[1]===3)?'Marzo ':''} 
                                {(signoEncontrado.meses[0]===4)?'Abril ':''} 
                                {(signoEncontrado.meses[1]===4)?'Abril ':''} 
                                {(signoEncontrado.meses[0]===5)?'Mayo ':''} 
                                {(signoEncontrado.meses[1]===5)?'Mayo ':''} 
                                {(signoEncontrado.meses[0]===6)?'Junio ':''} 
                                {(signoEncontrado.meses[1]===6)?'Junio ':''} 
                                {(signoEncontrado.meses[0]===7)?'Julio ':''} 
                                {(signoEncontrado.meses[1]===7)?'Julio ':''} 
                                {(signoEncontrado.meses[0]===8)?'Agosto ':''} 
                                {(signoEncontrado.meses[1]===8)?'Agosto ':''} 
                                {(signoEncontrado.meses[0]===9)?'Setiembre ':''} 
                                {(signoEncontrado.meses[1]===9)?'Setiembre ':''} 
                                {(signoEncontrado.meses[0]===10)?'Octubre ':''} 
                                {(signoEncontrado.meses[1]===10)?'Octubre ':''} 
                                {(signoEncontrado.meses[0]===11)?'Noviembre ':''} 
                                {(signoEncontrado.meses[1]===11)?'Noviembre ':''} 
                                {(signoEncontrado.meses[0]===12)?'Diciembre ':''} 
                                {(signoEncontrado.meses[1]===12)?'Diciembre ':''} 

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