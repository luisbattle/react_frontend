import React, { Component } from 'react';
import './App.css';
const URL_API = 'http://localhost:3001/api/user'


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }

  /* 
    *ACUMULADOR
    TO-DO -> Setear un acumulador y iterar sobre price de cada producto y acumular el total de productos en el state amount
  */
  componentDidMount() {
    console.log(URL_API)
    fetch(URL_API)
      .then(res => res.json())
      .then((response) => {
        console.log(response)
        this.setState({
          items: response.items
        })

      }
      )
      .catch(error => console.log(error))
  }



  render() {
    const { items } = this.state;
    return (
      <div>
        <h1>USERS</h1>
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.fullName} {item.country}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
