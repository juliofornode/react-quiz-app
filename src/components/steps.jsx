import React from 'react';

const Steps = () => {
    return (
        <div>
            <h3>Steps to build a quiz app with React.</h3>
            <ol>
                <li>State:</li>
                <ul>
                    <li>Questions</li>
                    <li>Score</li>
                    <li>Page number</li>
                </ul>
                <li>Components:</li>
                <ul>
                    <li>App: holds main state</li>
                    <li>Question list: includes individual question</li>
                    <li>Individual question</li>
                    <li>Progress & Score bar</li>
                    <li>Final message</li>
                </ul>
                <li><span style={{color: 'red'}}>Interesting note:</span> including <code>...this.state</code> as
                    attribute in the components gives it access to the parent's state as props.
                    <code>...this.props</code> does the same with the props.</li>
                <li><span style={{color: 'red'}}>Interesting note:</span> do not change the state from a component
                that did not define that state. Pass a function as a prop from the parent to do it in the parent (where
                the state was defined).</li>
                <li><span style={{color: 'red'}}>Interesting note:</span> clever way to display the Scorebox
                component only when the page number is greater than the length of the questions array.</li>

            </ol>
        </div>
    );
};

export default Steps;