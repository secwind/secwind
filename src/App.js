import React from "react";
import "./App.css";
import Contacts from "./Components/Contact/Contacts";
import HearderContact from "./Components/Contact/HeaderContact";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Provider } from "./Context";
import AddContact from "./Components/Contact/AddContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./About";
import Notfound from "./Components/NotFoundPages/Notfound";
import Test from "./Test";
import EditContact from "./Components/Contact/EditContact";
import SearchMovie from './Router/SearchMovie';
import { Provider } from 'react-redux';
import store from './store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app">
            <div className="Header" style={headingStyle}>
              <HearderContact nameH="Header My Project" />
            </div>

            <div className="container" name="wisanu">
              <Switch>
                 <Route exact path="/" component={Contacts} />
                <Route exact path="/contact/add" component={AddContact} />
                {/*<Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about/:urlReq" component={About} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/movie" component={SearchMovie} />
                <Route component={Notfound} /> */}
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

const headingStyle = {};

// const h4Style = {
//     color: 'green',
// }
