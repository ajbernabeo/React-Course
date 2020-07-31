import React from 'react';
import Counter from './Counter';
import { connect } from 'react-redux';
import { increment, decrement, inputNumber, changeCount } from '../actions/index';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <Counter 
          count={this.props.count} 
          clicks={this.props.clicks}
          input={this.props.input}
          onIncrement={this.props.onIncrement} 
          onDecrement={this.props.onDecrement}
          onInputNumber={this.props.onInputNumber}
          onChangeCount={this.props.onChangeCount}  
        />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement()),
    onInputNumber: () => dispatch(inputNumber()),
    onChangeCount: (number) => dispatch(changeCount(number))
  };
}
function mapStateToProps(state) {
    return {
      count: state.count,
      clicks: state.clicks,
      input: state.input
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(App);