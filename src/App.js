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
      title: ""
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

  changeTitle = (inputText) => {
    const titleText = inputText.target.value;
    this.setState(_ => ({title: titleText}))
  }

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredUsers = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    console.log("App rendered")

    return (
      <div className="App">
        <h1>{title ? title : "Change Me!"}</h1>
        <SearchInput textChangeHandler={this.filterNames} placeholder="Find Monster(s)"/>
        <br/>
        <SearchInput textChangeHandler={this.changeTitle} placeholder="Change the Title!"/>
        <CardList monsters={filteredUsers} />
        <button onClick={this.initializeMonstersHandler}>
          Create Monsters
        </button>
      </div>
    );
  }
}

export default App;
