import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    return(
        <div>
            <NumberOfStudents />
        </div>
    );
};

class NumberOfStudents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            enrolledStudents: 0,
            waitlistedStudents: 0,
            addStudent: 1
        };
    }

    incrementES() {
        this.setState({
            addStudent: 1,
            enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addStudent)
        });
    }

    incrementWS() {
        this.setState({
            addStudent: 1,
            waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addStudent)
        });
    }

    render(){
        return(
            <div>
                <h1>Enrolled Students: {this.state.enrolledStudents}</h1>
                <button onClick={this.incrementES.bind(this)}>Add 1 Enrolled Student</button>
                <h3>Add Multiple Enrolled Students</h3>
                <input
                    type="number"
                    onChange={event => this.setState({ addStudent: event.target.value })}
                />
                <button onClick={this.incrementES.bind(this)}>Increase Students</button>

                <h1>Waitlisted Students: {this.state.waitlistedStudents}</h1>
                <button onClick={this.incrementWS.bind(this)}>Add 1 Waitlisted Student</button>
                <h3>Add Multiple Waitlisted Students</h3>
                <input
                    type="number"
                    onChange={event => this.setState({ addStudent: event.target.value })}
                />
                <button onClick={this.incrementWS.bind(this)}>Increase Students</button>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));