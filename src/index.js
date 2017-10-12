import React from 'react';
import { render } from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';
import { colors } from 'material-ui/styles';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/common/Header';
import Main from './components/common/Main';
import MuiTheme from './components/common/MuiTheme';
import './styles/index.less';

const App = () => (
    <MuiThemeProvider muiTheme={MuiTheme}>
        <div>
            <Header />
            <Main />
        </div>
    </MuiThemeProvider>
);

render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('app'));
