import React, { Component } from 'react'
import Axios from '../node_modules/axios';


const Context = React.createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case 'Deleted_Contact':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
        contact.id !== action.payload)
      }

      case 'Add_Contact':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      }  
    default:
      return state;  

  }
}

export  class Provider extends Component {
    state = {
      contacts: [],
      dispatch: action => this.setState(state =>
      Reducer(state, action)  
      ),
    }

    async componentDidMount(){
      const res = await Axios.get('https://jsonplaceholder.typicode.com/users');
      this.setState({ contacts: res.data })
        
 
    }

    
    render() {
      return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
      )
    }
  }

export const Consumer = Context.Consumer;
  
