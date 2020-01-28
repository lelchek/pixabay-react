import React, { Component } from 'react';
import './searchbar.css';

class Searchbar extends Component {
  state = {
    searchPicture: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('submit-->', this.state.searchPicture);
    this.props.onSearch(this.state.searchPicture);
    this.setState({ searchPicture: '' });
  };

  handleChange = e => {
    this.setState({
      searchPicture: e.target.value,
    });
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label"></span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={this.state.searchPicture}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
