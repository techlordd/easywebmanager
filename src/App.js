import React, { Fragment } from 'react';
import './Styles.css';
import Header from './Layouts/Header'
import Content from './Layouts/Content';
import Footer from './Layouts/Footer';
import ErrorPage from './Layouts/ErrorPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Layouts/Sidebar';

function App() {
  return (      
    <Router>
      <Header/>
      <div className="content">
      <Sidebar/>
      
      <Switch>
      <Route exact path="/" component={Content}/>
        <Route path="*" component={ErrorPage}/>
      </Switch>
      </div>
      
      <Footer/>
      </Router>    
  );
}

export default App;
