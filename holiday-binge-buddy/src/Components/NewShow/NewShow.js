import React, { Component } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import ShowForm from "../ShowForm/ShowForm"

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

class NewShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchFilter: "",
      searchResults: [],
      showImdbId: "",
      show: {}
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  handleFilter(e) {
    this.setState({ searchFilter: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?s=${this.state.searchFilter}&type=series&apikey=${API_KEY}`
      )
      .then(res => {
        this.setState({ searchResults: res.data.Search });
      });
  }
  handleChoice(e) {
    this.setState({ showImdbId: e.target.id, searchResults: [] })
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.showImdbId !== prevState.showImdbId) {
      return axios
      .get(
        `http://www.omdbapi.com/?i=${this.state.showImdbId}&apikey=${API_KEY}`
      )
      .then(res => {
        this.setState({ show: res.data });
        console.log(this.state.show);
      });
    }
  }
  
  handleSave(e) {
        e.preventDefault();
        axios(
          {
              method: 'post',
              url: "https://holiday-binge-buddy.herokuapp.com/show/add",
              data: {
                  "Title": `${this.state.show.Title}`,
                  "Year": `${this.state.show.Year}`,
                  "Genre": `${this.state.show.Genre}`,
                  "Plot": `${this.state.show.Plot}`,
                  "imdbID": `${this.state.show.imdbID}`,
                  "Poster": `${this.state.show.Poster}`,
                  "imdbRating": `${this.state.show.imdbRating}`,
                  "imdbVotes": `${this.state.show.imdbVotes}`,
                  "totalSeasons": `${this.state.show.totalSeasons}`,
                  "justWatchUrl": `https://www.justwatch.com/us/search?q=${this.state.show.Title}`
              },
              headers: {
                  'Content-Type': 'application/json',
              }
          }
      )
  }
  render() {
    let showForm
    if (this.state.show.Title) {
      showForm = <ShowForm
          handleSave={this.handleSave}
          show={this.state.show}
        />
    }
    return (
      <>
        <SearchBar
          searchFilter={this.state.searchFilter}
          handleSubmit={this.handleSubmit}
          handleFilter={this.handleFilter}
        />
        <SearchResults
          searchResults={this.state.searchResults}
          handleChoice={this.handleChoice}
        />
        {showForm}
      </>
    );
  }
}

export default NewShow;