import React from 'react';

class Button extends React.Component {
    state = {
        count: 0
    }
    eventClick = () => {
        this.setState({
            count: this.state.count + 1,
        })
    }

    render(){
        const { count } = this.state;
        return (
            <div>
                <p> Manzanas: { count}</p>
                <button className="p-2 text-white bg-blue-500 rounded-lg" type="button" onClick={this.eventClick}>Agregar</button>
            </div>
        )
    }
}


export default Button;