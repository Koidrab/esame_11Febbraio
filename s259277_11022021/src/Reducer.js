import {CONFIGURA, REPLICA} from "./Actions";

export const initialState = {
    configurazioni: []
}

export default function Reducer(state, action) {
    switch (action.type) {

        case CONFIGURA :
            let newConfigurazioni = [...state.configurazioni];

            if (state.configurazioni.filter(c => c.ora === action.ora && c.giorno === action.giorno).length > 0) {
                newConfigurazioni = newConfigurazioni.filter(c => c.ora !== action.ora || c.giorno !== action.giorno); // per ogni configurazione c, se data e ora sono contemporaneamente uguali sia al giorno che all'ora della nuova configurazione, rimuovi c
            }
            return {
                ...state, configurazioni: [...newConfigurazioni, {
                    giorno: action.giorno,
                    ora: action.ora,
                    modalita: action.modalita,
                    temperatura: action.temperatura
                }]
            }

        case REPLICA : {
            let replica = state.configurazioni.filter(c => c.giorno === action.giorno);

            return {...state, configurazioni: [...replica.map(c => {
                    return {...c, giorno: 'Monday'}
                }), ...replica.map(c => {
                    return {...c, giorno: 'Tuesday'}
                }), ...replica.map(c => {
                    return {...c, giorno: 'Wednesday'}
                }), ...replica.map(c => {
                    return {...c, giorno: 'Thursday'}
                }), ...replica.map(c => {
                    return {...c, giorno: 'Friday'}
                }), ...replica.map(c => {
                    return {...c, giorno: 'Saturday'}
                }), ...replica.map(c => {
                    return {...c, giorno: 'Sunday'}
                })]};
        }

        default: return {...state};


    }

}