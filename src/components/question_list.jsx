import React, { Component } from 'react';
import Question from './question.jsx';

class QuestionList extends Component {

    render() {
        return(
            <div>
                {this.props.preguntas.map(pregunta => {
                    if(pregunta.numeroPregunta == this.props.page) {
                        return (
                        <Question
                            pregunta={pregunta}
                            key={pregunta.numeroPreguna}
                            {...this.props}
                        />
                        );
                    }
                })}
            </div>
        );
    }
}

export default QuestionList;