import React from 'react';
import Things from './Things';
import { Route, Link } from 'react-router-dom';

const FavoriteThings = ({ match }) => (
    <div>
        <h2>Favorite Things</h2>

        <ul>
            <li><Link to={`${match.url}/BMW i8`}>Car</Link></li>
            <li><Link to={`${match.url}/All meats but not much vegetables`}>Food</Link></li>
            <li><Link to={`${match.url}/Big Hero 6`}>Movie</Link></li>
        </ul>

        <Route path={`${match.url}/:thingsId`} component={Things} />
        <Route exact path={match.url} render={() => <h3>My Favorite Things (Please select)</h3>} />
    </div>
);

export default FavoriteThings;