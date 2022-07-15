import { Component } from 'react';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';

import './App.css';

class App extends Component {

  constructor() {
    super();

    //originalState = [];

    this.state = {
      monsters: [],
      searchString: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      }))

  }

  onSearchChange = (event) => {
    const searchString = event.target.value.toLowerCase();

    this.setState(() => {
      return { searchString } // Js saves this as searchString: value of searchString
    })

  }

  render() {


    const { monsters, searchString } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => monster.name.toLowerCase().includes(searchString));

    return (
      <div className="App">

        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox onChangeHandler={onSearchChange} placeHolder={"Search  Monsters"} className={'monsters-search-box'} />

        <CardList monsters={filteredMonsters} />

      </div>
    );
  }
}

export default App;
