import React, { Component } from 'react'

const Context = React.createContext();
const Reducer = (state, action) => {
  switch (action.type) {
    case 'Deleted_Contact':
      return {
        ...state,
        contacts: state.contacts.filter(contact =>
        contact.id !== action.payload)
      }
    default:
      return state;  

  }
}

export  class Provider extends Component {
    state = {
      contacts: [
          { id:1, name:'Jonh', email:'wisanu.mywork@gmail.com', phone:'0868261122' },
          { id:2, name:'Two', email:'two@gmail.com', phone:'0868261122' },
          { id:3, name:'Three', email:'three@gmail.com', phone:'0868261122' },
      ],
      dispatch: action => this.setState(state =>
      Reducer(state, action)  
      ),
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
  
