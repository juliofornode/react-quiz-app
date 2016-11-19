import React, { Component } from 'react';

class Question extends Component {

    handleChange(eventObject) {
        eventObject.preventDefault();
        const setScore = this.props.setScore;
        const setPage = this.props.setPage;
        const pregunta = this.props.pregunta;

        let respuestaSeleccionada = eventObject.target.value;

        if (respuestaSeleccionada == pregunta.respuestaCorrecta) {
            setScore(this.props.score + 1);
        }

        setPage(this.props.page + 1);

    }

    render() {

        const pregunta = this.props.pregunta;
        return(
            <div className="well">
                <h3>{pregunta.textoPregunta}</h3>
                <hr/>
                <ul className="list-group">
                    {pregunta.posiblesRespuestas.map(opcion => {
                        return (<li className="list-group-item" key={opcion.numeroRespuesta}>
                            <input
                                type="radio"
                                onChange={this.handleChange.bind(this)}
                                name={pregunta.numeroPregunta}
                                value={opcion.numeroRespuesta}
                            /> {opcion.textoRespuesta}
                        </li>);
                    })}
                </ul>
            </div>

        );
    }
}


export default Question;