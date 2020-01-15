import React, { Component } from 'react';
import { CardList } from './Components/CardList/CardList';
import { SearchBox } from './Components/search-box/SearchBox';

import './App.css';

class App extends Component {
  constructor (){
    super();

    this.state = {
      monsters : [],
      searchField:''
    };
    
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then( res => res.json())
    .then (list => this.setState({monsters: list}))
  }

  handleChange = e => this.setState( {searchField: e.target.value} );

  render() {
    const { monsters, searchField } = this.state;

    const filterdMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>

        <SearchBox placeholder="Search monsters" handleChange={this.handleChange}/>

        <CardList monsters={filterdMonsters} />
      </div>
    )
  }
}

export default App;
