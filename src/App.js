import React from 'react';
import './App.css';
import Converter from "./features/converter/Converter";
import {Container} from "semantic-ui-react";

function App() {
    return (
        <Container>
            <Converter/>
        </Container>
    );
}

export default App;