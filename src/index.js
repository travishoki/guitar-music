import React from 'react';
import ReactDOM from 'react-dom';
import UGS from 'ultimate-guitar-scraper';
import { MuiThemeProvider, getMuiTheme } from 'material-ui/styles';
import { AppBar } from 'material-ui';
import { cyan700 } from 'material-ui/styles/colors';
import { colors } from 'material-ui/styles';
// import './styles/index.less';

import SongTable from './SongTable';

const muiTheme = getMuiTheme({
    palette: {
        primary1Color: cyan700,
    },
});

const App = () => {
    return (
        <MuiThemeProvider muiTheme={muiTheme}>
            <div>
                <AppBar title="Hoki Campfire Songs" showMenuIconButton={false} />

                <SongTable />
            </div>
        </MuiThemeProvider>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
