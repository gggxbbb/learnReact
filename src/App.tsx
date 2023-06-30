import React, {JSX} from 'react';
import App01 from "./App01";
import './App.css'

const appList = [
    App01
]

function App() {
    const appElements = appList.map((app, index) => {
        return PlaceHolder(app.name, app())
    })
    return (
        <div className="App">
            {appElements}
        </div>
    )
}

function PlaceHolder(name: string, children: JSX.Element): JSX.Element {
    return (
        <div>
            <h1>{name}</h1>
            <div className="placeholder">
                {children}
            </div>
            <hr/>
        </div>
    )
}

export default App;
