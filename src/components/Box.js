import React, { Component } from 'react'

class Box extends Component {


    render() {

        return (
            <div>
                <div style={{ backgroundColor: this.props.backgroundColor, height: this.props.height, width: this.props.width }}></div>
                <button onClick={this.props.removeBox}>Remove</button>      
            </div>
        )
    }
}

export default Box;
