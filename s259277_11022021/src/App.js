import '../node_modules/react-vis/dist/style.css';
import React, {createContext, useReducer} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Switch, Route, Link, BrowserRouter} from "react-router-dom";
import Configurazione from "./Configurazione";
import Home from "./Home";
import Reducer, {initialState} from "./Reducer";


export const StateContext = createContext();

function App() {
    return (
        <StateContext.Provider value={useReducer(Reducer, initialState)}>
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'>
                            <Home/>
                        </Route>
                        <Route exact path='/configurazione'>
                            <Configurazione/>
                        </Route>
                    </Switch>
                </BrowserRouter></div>
        </StateContext.Provider>
    );
}

export default App;
