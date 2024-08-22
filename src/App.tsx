import React from 'react';
import './App.css';
import {Button} from "./button/Button";

function App() {
    return (
        <div className="App">
            <Button iconId="heart"
                    style={{backgroundColor: 'pink'}}/>

            <Button iconId="cloud"
                    style={{backgroundColor: 'lightblue'}}/>

            <Button iconId="star"
                    style={{backgroundColor: 'lightgreen'}}/>
        </div>
    );
}

export default App;
