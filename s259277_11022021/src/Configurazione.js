import './App.css';
import React, {useContext, useState} from "react";
import {StateContext} from "./App";
import {Image, Button, Row, Col, Container} from "react-bootstrap";
import {Configura, Replica} from "./Actions";
import Grafico from "./Grafico";
import fiamma from './fiamma.png';
import neve from './neve.png'
import arrow from './arrow.png';
import {Link} from "react-router-dom";
import {createMuiTheme, ThemeProvider, Slider} from '@material-ui/core';

export default function Configurazione() {
    const [state, dispatch] = useContext(StateContext);
    const [temperatura, setTemperatura] = useState(25);
    const [giorno, setGiorno] = useState('Monday');
    const [ora, setOra] = useState('00')
    const [modalita, setModalita] = useState('');
    const [fiammabw, setFiamma] = useState('100%');
    const [nevebw, setNeve] = useState('100%');
    const ore = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'];
    let sliderColor;
    if (modalita === 'riscaldamento')
        sliderColor = '#F25900'
    else
        sliderColor = '#007bff'

    const muiTheme = createMuiTheme({
        overrides: {
            MuiSlider: {
                thumb: {
                    color: sliderColor,
                },
                track: {
                    color: sliderColor
                },
                rail: {
                    color: 'black'
                }
            }
        }
    });

    return <Container className='configurazione'>
        <Row>
            <Col md='auto' xs={12} ><Link to='/'><Image src={arrow} style={{margin: '0 14px 7px 0'}}
                                                      className='backArrow imgButton'/></Link></Col>
            <Row className='confRow'>
                <Col md='auto' xs={8} className='chartContainer'>
                    <Row className='chartRow'>
                        <Col className='chartCol' sm xs='auto'><Grafico giorno={giorno}/></Col>
                    </Row>
                </Col>

                <Col md='auto' xs={12} style={{padding: '7px 7px 7px 7px'}} className='divider'></Col>

                <Col md='auto' xs={8} className='panel'>
                    <Row style={{margin: '18px 0 28px 0', fontWeight: 'bold'}}>Configura</Row>
                    <Row>
                        <Col xs={6} sm='auto' className='confCol'>
                            <Row>
                                <select style={{width: '62.81px'}} onChange={e => setOra(e.target.value)}>
                                    {ore.map(o => <option value={o}>{o}:00</option>)}
                                </select>
                            </Row>
                            <Row>
                                <select style={{width: '62.81px'}} onChange={e => {
                                    setGiorno(e.target.value);
                                }}>
                                    <option value='Monday'>Lun</option>
                                    <option value='Tuesday'>Mar</option>
                                    <option value='Wednesday'>Mer</option>
                                    <option value='Thursday'>Gio</option>
                                    <option value='Friday'>Ven</option>
                                    <option value='Saturday'>Sab</option>
                                    <option value='Sunday'>Dom</option>
                                </select>
                            </Row>
                            <Row>

                                <Col xs={4} sm='auto' className='imgButton' onClick={() => {
                                    setModalita('riscaldamento')
                                    setFiamma('0%')
                                    setNeve('100%')
                                }}>
                                    <Image src={fiamma} style={{filter: `grayscale(${fiammabw})`}}
                                    />
                                </Col>
                                <Col xs={4} sm='auto' className='imgButton' onClick={() => {
                                    setModalita('raffreddamento')
                                    setFiamma('100%')
                                    setNeve('0%')
                                }}>
                                    <Image src={neve} style={{filter: `grayscale(${nevebw})`}}
                                    />

                                </Col>
                            </Row>


                        </Col>
                        <Col xs='auto' className='confCol'>
                            <ThemeProvider theme={muiTheme}><Slider orientation='vertical' defaultValue={25}
                                                                    valueLabelDisplay='auto' min={15} max={35}
                                                                    step={0.5}
                                                                    onChange={(e, value) => {
                                                                        setTemperatura(value)
                                                                    }} value={temperatura}
                                                                    style={{height: '150px'}}/></ThemeProvider>
                        </Col>
                    </Row>
                    <Row className='panelButton'>
                        <Button variant="outline-dark" onClick={() => {
                            dispatch(Replica(giorno))
                        }}>Replica</Button>
                    </Row>
                    <Row className='panelButton'>
                        <Col xs='auto'>
                            <Button variant='dark'
                                    onClick={() => dispatch(Configura(giorno, ora, modalita, temperatura))}>Salva</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Row>

    </Container>
}