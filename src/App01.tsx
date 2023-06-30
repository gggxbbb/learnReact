import React from 'react';
import {useState} from "react";
import './App.css';

function App01() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div className="App">
            <h1 onClick={onClick}>
                Hello World
            </h1>
            {MyP("This is a paragraph")}
            {MyP("This is a paragraph", 200)}
            <hr/>
            <MyP2 count={count} onClick={handleClick}/>
            <MyP2 count={count} onClick={handleClick}/>
            {MyP2({count, onClick: handleClick})}
        </div>
    );
}

function MyP(data: string, height?: number) {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return <p
        style={
            {
                height: height ? height : 100,
            }
        }
        onClick={handleClick}
    >{data}:{count}</p>
}

function MyP2({count, onClick}: { count: number, onClick: () => void }) {
    return <p onClick={onClick}>{count}</p>
}

function onClick() {
    console.log("Clicked");
    alert("Clicked");
}

export default App01;
