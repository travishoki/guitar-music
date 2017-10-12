import React from 'react';
import HomePage from '../pages/home/HomePage';
import SongPage from '../pages/song/SongPage';
import NotFoundPage from '../pages/notFound/NotFoundPage';


import { Switch, Route } from 'react-router-dom'
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/song/:title' component={SongPage}/>
            <Route path='*' component={NotFoundPage} />
        </Switch>
    </main>
);

export default Main;
