import React from 'react';
import './App.css';
import Contacts from './Components/Contact/Contacts';
import HearderContact from './Components/Contact/HeaderContact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './Context';



class App extends React.Component {
  render() {

    
    return (
      <Provider>
      <div className="app">
          <div className="Header" style={headingStyle}>
            <HearderContact 
              nameH="Header My Project"
            />  
          </div>
        
          <div className="container" name="wisanu">
            <Contacts/>  
          </div>
      </div>
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