import React, { Component } from 'react'
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class BoxList extends Component {

    state = {
        parameters: [
            { backgroundColor: "green", height: 100 , width: 100, id: uuidv4() }
        ]
    }


    addNewBox = (params) => {
        let newBox = { ...params, id: uuidv4() };
        this.setState(st=> ({
            parameters: [...st.parameters, newBox]
        }));
    }

    removeBox = (id) => {
        this.setState({
            parameters: this.state.parameters.filter(box => box.id !== id)
        })
    }

    renderItems = () => {
        return (
            <div>
                {this.state.parameters.map((box, index) => (
                        <Box 
                        backgroundColor={box.backgroundColor} 
                        width={parseInt(box.width)} 
                        height={parseInt(box.height)}
                        removeBox={() =>this.removeBox(box.id)}
                        key={box.id}
                        id={box.id}
                        />
                ))}
            </div>
        );
    }

    render() {



        return (
            <div>          
                <NewBoxForm addNewBox={this.addNewBox} />
                {this.renderItems()}
            </div>
        )
    }
}

export default BoxList;
