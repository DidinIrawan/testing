import React, {Component} from 'react';
import {Title} from "./components/Title";
import {Input} from "./components/Input";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            counter:0,
            name:"",
            text:""
        }
    }
    handleChange = (value) =>{
        this.setState({
            inputValue: value,
        });
    };
    render() {
        return (
            <div data-test="component-app">
                <h1 data-test="counter-display">
                    The counter is currently {this.state.counter}
                </h1>
                <Title text={this.state.text}/>
                <Input handleChange={this.handleChange} value={this.state.inputValue} />
                <button
                    data-test="increment-button"
                    onClick={() => this.setState(
                    {counter: this.state.counter + 1})}
                >
                    "Increment counter"
                </button>
                {/*<div className='App'> Lorem ipsumm ...</div>*/}
            </div>
        );
    }
}

export default App;