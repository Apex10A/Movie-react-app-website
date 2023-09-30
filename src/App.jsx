import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home.jsx';
import MovieDetails from './Components/SecondPage/MovieDetails.jsx';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/movies/:id" component={MovieDetails} />
      </Switch>
    </Router>
  );
};

export default App;
