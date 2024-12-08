// THIS IS WHERE THE APP IS RENDERED. IN OTHER WORDS, WE PLACE ALL THE COMPONENTS ON HERE TO SHOW ON THE WEB ONCE THE APP IS LOADED

import React from 'react'
import Login from './admin/login'
import Dashboard from './admin/Dashboard';
import Homepage from './homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


//function App() {
 // return (
   // <div>
     //   {/* Login component */}
      //{/* <Login />  */}
    //</div>
  //)
//}

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/homepage" component={Homepage} />
            </Switch>
        </Router>
    );
}

export default App