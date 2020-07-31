import React from 'react';
import ReactDOM from 'react-dom';

const API = 'https://jsonplaceholder.typicode.com/photos';

class App extends React.Component {
    state = {
        pictures: [],
        error: null
    };

    componentDidMount() {
        fetch(API)
            .then(repos => repos.json())
            .then(pics => {
                let filtered = pics.filter((i, index) => index < 50);
                this.setState({ pictures: filtered })
            })
            .catch(err => this.setState({ error: err }));
    };

    render() {
        return (
            <div>
            {this.state.pictures.map(
                pic => (<img key={pic.id} src={pic.thumbnailUrl} />)
            )}
            </div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("root"));