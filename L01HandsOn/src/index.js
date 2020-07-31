import React from 'react';
import ReactDOM from 'react-dom';

//Favorite Colors
const blue = React.createElement('li', {}, 'blue');
const black = React.createElement('li', {}, 'black');
const gray = React.createElement('li', {}, 'gray');

const favColor = React.createElement('ol', {}, blue, black, gray);

//Favorite Music
const song1 = React.createElement('ul', {}, React.createElement('li', {}, "Location"));
const song2 = React.createElement('ul', {}, React.createElement('li', {}, "Sunday Morning"));
const song3 = React.createElement('ul', {}, React.createElement('li', {}, "Gentlemen Don't"));

const artist1 = React.createElement('li', {}, 'Kalid', song1);
const artist2 = React.createElement('li', {}, 'Maroon 5', song2);
const artist3 = React.createElement('li', {}, 'Gabe Bondoc', song3);

const favMusic = React.createElement('ol', {}, artist1, artist2, artist3);

//Favorite Food
const vege = React.createElement('ul', {}, React.createElement('li', {}, "Spinach"));
const meat = React.createElement('ul', {}, React.createElement('li', {}, "Chicken"));
const fruit = React.createElement('ul', {}, React.createElement('li', {}, "Apples"));

const food1 = React.createElement('li', {}, 'Vegetable', vege);
const food2 = React.createElement('li', {}, 'Meat', meat);
const food3 = React.createElement('li', {}, 'Fruit', fruit);

const favFood = React.createElement('ol', {}, food1, food2, food3);

//Favorite Website
const yt = React.createElement('li', {}, React.createElement('a', {href: 'youtube.com'}, 'youtube.com'));
const bh = React.createElement('li', {}, React.createElement('a', {href: 'bhphotovideo.com'}, 'bhphotovideo.com'));
const ne = React.createElement('li', {}, React.createElement('a', {href: 'newegg.com'}, 'newegg.com'));

const favWebsite = React.createElement('ol', {}, yt, bh, ne);

//Compile
const favorite = React.createElement(
    'ul', {}, 
        React.createElement('li', {className: 'FavColors'}, 'Favorite Colors', favColor),
        React.createElement('li', {className: 'FavMusic'}, 'Favorite Music', favMusic),
        React.createElement('li', {className: 'FavFood'}, 'Favorite Food', favFood),
        React.createElement('li', {className: 'FavWebsite'}, 'Favorite Website', favWebsite)
);

//Render
ReactDOM.render(
    React.createElement(
        'div', {},
            React.createElement('h1', {}, 'My Favorites'),
            favorite
    ),
    document.getElementById('root')
);