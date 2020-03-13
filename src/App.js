import React from 'react';
import './Styles.css';
import Header from './Layouts/Header'
import Domain from './Layouts/Domain';
import Footer from './Layouts/Footer';
import ErrorPage from './Layouts/ErrorPage'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Layouts/Sidebar';
import Hosting from './Layouts/Hosting';
import Ownership from './Layouts/Ownership';
import Subscription from './Layouts/Subscription';
import AddSite from './Layouts/AddSite';
import WebsiteFeatures from './Layouts/WebsiteFeatures';

function App() {
  return (      
    <Router>
      <Header/>
      <div className="content">
      <Sidebar/>
      
      <Switch>
        <Route exact path="/" component={Domain}/>
        <Route exact path="/hosting" component={Hosting}/>
        <Route exact path="/ownership" component={Ownership}/>   
        <Route exact path="/subscription" component={Subscription}/>
        <Route exact path="/addsite" component={AddSite}/>
        <Route exact path="/features" component={WebsiteFeatures}/>
         <Route path="*" component={ErrorPage}/> 
      </Switch>
      </div>
      
      <Footer/>
      </Router>    
  );
}

export default App;
