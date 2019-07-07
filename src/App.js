import React, { Component } from 'react';

import './App.css';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
      ],
      searchField: ''
    };
  }

  componentDidMount() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ monsters: users}))
  }

  handleChange = e => {
     this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return <div className='App'>
        <h1> Monsters Rolodex </h1>
        <SearchBox 
          placeholder='search monsters'
          handleChange={this.handleChange}
          />
      <CardList monsters={filteredMonsters} />
      <h2>Do you want to learn how to create and deploy this website made in React and Javascript for yourself ?</h2>
      <h1>Let's Check<a href='https://tinyurl.com/yynax3jy' target='_blank' rel='noopener noreferrer'> It </a>Out;)!</h1>
    </div>
  }
}




export default App;
