import React from 'react'

class Counter extends React.Component{
    render() {
        return (
             <div>
                 {this.props.count}
                <div>
                    <button onClick={this.props.incrementCounter}>increment Counter</button>
                    <button onClick={this.props.decrementCounter}>decrement Counter</button>
                </div>
             </div>
        );
    }
}
export default Counter;