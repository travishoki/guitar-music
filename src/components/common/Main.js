import React from "react";
import HomePage from "../../routes/home/HomePage";
import SongPage from "../../routes/song/SongPage";
import NotFoundPage from "../../routes/notFound/NotFoundPage";
import { Switch, Route } from "react-router-dom";

const Main = ({ isGuitarMode }) => (
  <main>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <HomePage isGuitarMode={isGuitarMode} />}
      />
      <Route path="/song/:title" render={(props) => <SongPage {...props} />} />
      <Route path="*" component={NotFoundPage} />
    </Switch>
  </main>
);

export default Main;
