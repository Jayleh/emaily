import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './SurveryNew';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={Landing} />
          <Route path='/surveys' exact component={Dashboard} />
          <Route path='/surveys/new' exact component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
