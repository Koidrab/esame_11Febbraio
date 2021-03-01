import Chart from "react-google-charts";
import {useContext} from "react";
import {StateContext} from "./App";

export default function Grafico({giorno}) {
    const [state, dispatch] = useContext(StateContext);
    let configurazioni = [['', 'Temperatura', {role: 'style'}]];

    state.configurazioni.filter(c => c.giorno === giorno).map(c => {
        if (c.modalita === 'riscaldamento')
            configurazioni.push([c.ora, c.temperatura, '#F25900'])
        else configurazioni.push([c.ora, c.temperatura, '#007BFF'])
    });
    if (configurazioni.length === 1)
        return <div
            style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            Il tuo grafico verrà visualizzato qui
        </div>
    else
        return <Chart
            width='100%'
            height='100%'
            chartType="ColumnChart"
            loader={<div style={{
                width: '430px',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                Caricamento dati...
            </div>}
            data={configurazioni.sort((a, b) => a[0].localeCompare(b[0]))} //ordino confrontando le stringhe orario
            options={{
                title: '',
                chartArea: {width: '70%', height: '76%'},
                hAxis: {
                    title: 'Ora',
                    titleTextStyle: {
                        fontName: 'Sans-serif',
                        italic: false
                    }
                },
                vAxis: {
                    title: 'Temperatura',
                    baseline: {color: 'none'},
                    gridlines: {color: 'lightgray'},
                    minorGridlines: {color: 'lightgray'},
                    minValue: '0',
                    maxValue: '35',
                    titleTextStyle: {
                        fontName: 'Sans-serif',
                        italic: false
                    }
                },
                legend: {
                    position: 'none'
                },
                width: '',
                height: '',
                animation: {
                    duration: 500,
                    easing: 'inAndOut'
                }
            }}
        />

}