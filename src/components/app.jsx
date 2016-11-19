import React, { Component } from 'react';
import Steps from './steps.jsx';
import QuestionList from './question_list.jsx';
import Scorebox from './scorebox.jsx';
import Results from './results.jsx';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preguntas: [
                {
                    numeroPregunta: 1,
                    textoPregunta: 'Capital of Spain?',
                    posiblesRespuestas: [
                        { numeroRespuesta: 1, textoRespuesta: 'Barcelona'},
                        { numeroRespuesta: 2, textoRespuesta: 'Sevilla'},
                        { numeroRespuesta: 3, textoRespuesta: 'Madrid'}
                    ],
                    respuestaCorrecta: 3
                },
                {
                    numeroPregunta: 2,
                    textoPregunta: 'Capital of France?',
                    posiblesRespuestas: [
                        { numeroRespuesta: 1, textoRespuesta: 'Marseille'},
                        { numeroRespuesta: 2, textoRespuesta: 'Paris'},
                        { numeroRespuesta: 3, textoRespuesta: 'Nantes'}
                    ],
                    respuestaCorrecta: 2
                }
            ],
            score: 0,
            page: 1
        };
    }

    handleScore(newScore) {
        this.setState({ score: newScore });
    }

    handlePage(newPage) {
        this.setState({ page: newPage })
    }

    render() {

        if(this.state.page > this.state.preguntas.length) {
            var scorebox = '';
            var results = <Results {...this.state} />;
        } else {
            var results = '';
            var scorebox = <Scorebox {...this.state} />;
        }

        return (
            <div style={{marginTop: '100'}}>
                <h3>Quiz App</h3>
                {scorebox}
                {results}
                <QuestionList
                    setScore={this.handleScore.bind(this)}
                    setPage={this.handlePage.bind(this)}
                    {...this.state}
                />
                <Steps />
            </div>
        );
    }
}


export default App;