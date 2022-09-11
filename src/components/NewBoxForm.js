import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends Component {

    state = { backgroundColor: "", width: 0, height: 0 }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        this.props.addNewBox(this.state);
        this.setState({backgroundColor: "", width: 0, height: 0});
    }

    render() {

        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor='backgroundColor'>BackgroundColor</label>
                <input
                    id='backgroundColor'
                    name='backgroundColor'
                    type="text"
                    value={this.state.backgroundColor}
                    onChange={this.handleChange}
                ></input>

                <label htmlFor='width'>Width</label>
                <input
                    id='width'
                    name='width'
                    type="number"
                    value={this.state.width}
                    onChange={this.handleChange}
                ></input>
                
                <label htmlFor='height'>Height</label>
                <input
                    id='height'
                    name='height'
                    type="number"
                    value={this.state.height}
                    onChange={this.handleChange}
                ></input>

                <button>Submit!</button>
            </form>
        )
    }
}

export default NewBoxForm;
