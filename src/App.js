import React from 'react';
import './App.css';
import Contacts from './Components/Contact/Contacts';
import HearderContact from './Components/Contact/HeaderContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';
import AddContact from './Components/Contact/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Notfound from './Components/NotFoundPages/Notfound';
import Test from "./Test";




class App extends React.Component {
  

  render() {

    
    return (
      <Provider>
        <Router>
          <div className="app">
              <div className="Header" style={headingStyle}>
                <HearderContact 
                  nameH="Header My Project"
                />  
              </div>

              <div className="container" name="wisanu">
                <Switch>
                  <Route exact path="/" component={Contacts}/>
                  <Route exact path="/contact/add" component={AddContact}/>
                  <Route exact path="/about/:urlReq" component={About}/>
                  <Route exact path="/test" component={Test}/>
                  <Route component={Notfound}/>
                </Switch>
              </div>
          </div>
        </Router>
      </Provider>
    )
  
  }
}

export default App;

const headingStyle = {

}


// const h4Style = {
//     color: 'green',
// }