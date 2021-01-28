import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// pages
import MainPage from '../pages/MainPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

// components
import Navbar from '../components/Navbar';
import TheFooter from '../components/Footer';

function App() {
  return (
    <div className="MyShopp">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path = '/' component={MainPage} />
          <Route exact path = '/product-details/:id' component={ProductDetailsPage} />
        </Switch>
        <TheFooter/>
     </Router>
    </div>
  );
}

export default App;
