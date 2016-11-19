import React, {Component} from 'react';

class Results extends Component {
    render() {
        return(
            <div className="well">
                <h3>You had {this.props.score} correct and {this.props.preguntas.length - this.props.score} wrong answers.</h3>
            </div>
        );
    }
}

export default Results;