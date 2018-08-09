import React, { Component } from 'react'

class Test extends Component {

  state = {
    title:'',
      id:''
  }
  
  componentDidMount(){

   fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => this.setState({
    title:json.title, id:json.id
  }))
    
  }


  render() {
    const { title, id} = this.state;
    return (
      
      <div>

          <h1>{title} => </h1>
          <h1>{id}</h1>
         
      </div>
    )
  }
}



export default Test;