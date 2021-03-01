import {Link} from "react-router-dom";
import React, {useContext, useState} from "react";
import {StateContext} from "./App";
import moment from 'moment';
import Time from "./Time";
import Container from "react-bootstrap/Container";
import {Button, Col, Image, Row} from "react-bootstrap";
import sun from './sun.png';
import snow from './snow.png';
import settings from './ruote.png';
import setting from './ruota.png'

export default function Home() {
    const [state, dispatch] = useContext(StateContext);
    const currentConf = state.configurazioni.filter(c => c.ora === moment().format("HH") && c.giorno === moment().format('dddd'));
    let iconSun = '0.2';
    let iconSnow = '0.2';
    if (currentConf.length !== 0) {
        if (currentConf[0].modalita === 'riscaldamento')
            iconSun = '1';
        else if (currentConf[0].modalita === 'raffreddamento')
            iconSnow = '1';
    }
    return <Container className='home'>
        <Row className='homeRow'>
            <Col sm='auto' xs={8} className='sx'>
                <Time/>
                <Row className='homeMode'>
                    <Col xs='auto'><Image src={sun} style={{opacity: iconSun}}/></Col>
                    <Col xs='auto'><Image src={snow} style={{opacity: iconSnow}}/></Col>
                </Row>

                <Row className='tempRow'>
                    {(currentConf.length === 0) ?
                        <div className='tempCol'>OFF</div> :
                        <div className='tempCol'>{currentConf[0].temperatura}°C</div>}
                </Row>

            </Col>
            <Col md='auto' xs={12} style={{padding: '0 7px 0 7px'}}></Col>
            <Col sm xs={8} className='dx'>
                <div className='toSettingContainer'><Row>
                    <Col>
                        <Link to='/configurazione'>
                            <img className='toSetting' src={setting}/>
                        </Link>
                    </Col>
                </Row>
                </div>
            </Col>
        </Row>
    </Container>
}