import React from 'react';
import ReactDOM from 'react-dom';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

// const App = () => (
//     <MuiThemeProvider>
//         <MyAwesomeReactComponent />
//     </MuiThemeProvider>
// );

// var ugs = require('ultimate-guitar-scraper');
// ugs.search({
//   bandName: 'Pink Floyd',
//   songName: 'Wish You Were Here',
//   page: 1,
//   type: ['tabs', 'chords', 'guitar pro tabs'],
// }, function(error, tabs) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tabs);
//   }
// });

// var tabUrl = "https://tabs.ultimate-guitar.com/n/nirvana/smells_like_teen_spirit_ver2_crd.htm";
// ugs.get(tabUrl, function(error, tab) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(tab);
//   }
// });

const App = () => {
    return (<div>
        <h1>Campfire Songs</h1>
        <MyAwesomeReactComponent />
    </div>);
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
