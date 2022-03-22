import React from 'react'

class Counter extends React.Component{
    render() {
        return (
             <div className="main">
                <p className="counter">Count: {this.props.count}</p>
                <div className="buttons">
                    <button className="increment" onClick={this.props.incrementCounter}>increment Counter</button>
                    <button className="decrement" onClick={this.props.decrementCounter}>decrement Counter</button>
                </div>
             </div>
        );
    }
}
export default Counter;