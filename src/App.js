import React, { Component } from 'react';
import CardList from './CardList';
import Searchbox from './Searchbox';
import {robots} from './robots.js'


class App extends Component {
  constructor(props){
    super(props)

    this.state= {
      robots: robots,
      searchfield: '',
    }
    //this.filteredRobots = this.filteredRobots.bind(this)
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
    
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
    <div className="tc">
      <h1>RoboFriends</h1>
      <Searchbox searchChange={this.onSearchChange}/>
      <CardList robots={filteredRobots} />
    </div>
  );
  }
}

export default App;