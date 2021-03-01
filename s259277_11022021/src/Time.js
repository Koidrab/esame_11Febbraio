import React, {useEffect, useState} from "react";
import moment from 'moment';
import {Container, Col, Row} from "react-bootstrap";

export default function Time() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (<div className='dateTime'>

            <div className='timeCol'>
                    <div className='time'>{moment(date).format('HH')}</div>
                    <div className='time'>{moment(date).format('mm')}</div>
                </div>

                <div className='dateCol'>
                    <div className='date' style={{borderBottom: 'solid 0.1vw'}}>{moment(date).format('DD')}</div>
                    <div className='date' style={{borderBottom: 'solid 0.1vw'}}>{moment(date).format('MM')}</div>
                    <div className='date'>{moment(date).format('YY')}</div>
                </div>
        </div>
    )
}