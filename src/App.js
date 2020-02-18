import React from 'react';
import HomePage from "./Pages/HomePage";

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import DashBoardLayout from "./Components/HOC/DashBoardLayout";
import AboutPage from "./Pages/AboutPage";
import MenuPage from "./Pages/MenuPage";


function App() {
  return (
    <div>
      <Router>
          <Switch>
        <Route exact path='/' component={HomePage}/>
        <DashBoardLayout>
        <Route path='/menu' component={MenuPage}/>
        <Route path='/about' component={AboutPage}/>
        </DashBoardLayout>
          </Switch>
      </Router>

    </div>
  );
}

export default App;
