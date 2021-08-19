import { Component } from "react";
// Styles
import "./App.css";

// Components
import CardList from "components/card-list/card-list.component";
import SearchInput from "components/search-input/search-input.component";

class App extends Component {
  constructor() {
    super(); // to initialize Component's constructor
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount = () => {
    /**
     * runs once ONLY. only when component mounts.
     */
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
    console.log("ComponentDidMount");
  };

  filterNames = (searchInput) => {
    const searchInputValue = searchInput.target.value;
    this.setState((_) => ({ searchField: searchInputValue }));
  };

  render() {
    const { monsters, searchField } = this.state;
    const filteredUsers = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log("App rendered")

    return (
      <div className="App">
        <h1>Sample Header</h1>
        <SearchInput textChangeHandler={this.filterNames} placeholder="Find Monster(s)"/>
        <CardList monsters={filteredUsers} />
        <button onClick={this.initializeMonstersHandler}>
          Create Monsters
        </button>
      </div>
    );
  }
}

export default App;
