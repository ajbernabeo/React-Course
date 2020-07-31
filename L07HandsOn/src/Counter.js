import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {
  increaseBy1 = () => {
    this.props.dispatch({ type: 'INCREASEBY1' });
  };

  increaseBy5 = () => {
    this.props.dispatch({ type: 'INCREASEBY5' });
  };

  decreaseBy1 = () => {
    this.props.dispatch({ type: 'DECREASEBY1' });
  };

  decreaseBy10 = () => {
    this.props.dispatch({ type: 'DECREASEBY10' });
  };

  reset = () => {
    this.props.dispatch({ type: 'RESET' });
  };

  render() {
    return (
      <div>
        <h2>Counter</h2>

        <div>
          <h3>{this.props.count}</h3>
          <button onClick={this.increaseBy1}>Increase by 1</button><br></br>
          <button onClick={this.increaseBy5}>Increase by 5</button><br></br>
          <button onClick={this.decreaseBy1}>Decrease by 1</button><br></br>
          <button onClick={this.decreaseBy10}>Decrease by 10</button><br></br>
          <button onClick={this.reset}>reset</button>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);