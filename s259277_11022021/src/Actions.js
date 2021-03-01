export const CONFIGURA = 'configura';
export const REPLICA = 'replica';

export function Configura(giorno,  ora, modalita, temperatura){
    return {type: CONFIGURA, giorno, ora, modalita, temperatura}
}

export function Replica(giorno) {
    return {type: REPLICA, giorno}
}