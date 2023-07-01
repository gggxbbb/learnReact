import React, {JSX} from 'react';
import App01 from "./App01";
import './App.css'
import App02 from "./App02";

const appList = [
    App01,
    App02
]

function App() {
    const appElements = appList.map((app) => {
        return <PlaceHolder name={app.name}>
            {app()}
        </PlaceHolder>
    })
    return (
        <div className="App">
            {appElements}
        </div>
    )
}

interface PlaceHolderProps {
    name: string,
    children: JSX.Element
}

function PlaceHolder({name, children}:PlaceHolderProps): JSX.Element {
    return (
        <div>
            <h1 id={name}>{name}</h1>
            <div className="placeholder">
                {children}
            </div>
            <hr/>
        </div>
    )
}

export default App;
