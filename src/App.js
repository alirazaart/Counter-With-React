
import './App.css';
import React from 'react';
import Counter from './Counter'
class App extends React.Component {
  constructor(){
    super();
    this.state = {
      first_name : 'Ali',
      count:0
    }
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
  }
  incrementCounter(){
    let count = this.state.count;
    this.setState({
      count: ++count
    })
  }
  decrementCounter(){
    let count = this.state.count;
    this.setState({
      count: --count
    })
  }
  render() {
      return (
        <div className="App">
          <Counter 
          count={this.state.count} 
          incrementCounter={this.incrementCounter} 
          decrementCounter={this.decrementCounter} 
          />
        </div>
      );
    }
  }

export default App;
