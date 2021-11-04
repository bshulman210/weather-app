import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WeatherForm from './wx-form';

const Routes = () => {
  return (
    <Router>
      <div>
        <main>
          <Route exact path="/" component={WeatherForm} />
        </main>
      </div>
    </Router>
  );
};

export default Routes;
