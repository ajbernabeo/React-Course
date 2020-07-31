import React from 'react';
import ReactDOM from 'react-dom';

const App = props => {
    const favoriteCars = [
        'Honda CR-V ',
        'Toyota Highlander',
        'Ford F-150',
        'BMW X3',
        'Subaru Crosstrek'
    ];

    return <List item={favoriteCars} />;
};

const List = props => {
    const listItems = props.item.map((item, index) => (<li key={index}>{item}</li>));
    return <ul>{listItems}</ul>;
};

ReactDOM.render(<App />, document.getElementById('root'));