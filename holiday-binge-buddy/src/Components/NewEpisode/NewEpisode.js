import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Collapse } from "react-bootstrap";
import EpisodeForm from "../EpisodeForm/EpisodeForm"

const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

class NewEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      season: "",
      episodeNumber: "",
      episode: {},
      open: false
    };
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleEpisodeNumberChange = this.handleEpisodeNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSeasonChange(e) {
    this.setState({ season: e.target.value });
    console.log(this.state.season)
  }
  handleEpisodeNumberChange(e) {
    this.setState({ episodeNumber: e.target.value });
    console.log(this.state.episodeNumber)
  }
  handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        `http://www.omdbapi.com/?i=${this.props.showImdbId}&Season=${this.state.season}&Episode=${this.state.episodeNumber}&apikey=${API_KEY}`
      )
      .then(res => {
        this.setState({ episode: res.data });
        console.log(this.state.episode)
      });
  }
  handleSave(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://holiday-binge-buddy.herokuapp.com/episode/add",
      data: {
        show: `${this.props.showID}`,
        Title: `${this.state.episode.Title}`,
        Released: `${this.state.episode.Released}`,
        Season: `${this.state.episode.Season}`,
        Episode: `${this.state.episode.Episode}`,
        Runtime: `${this.state.episode.Runtime}`,
        Plot: `${this.state.episode.Plot}`,
        Poster: `${this.state.episode.Poster}`,
        imdbRating: `${this.state.episode.imdbRating}`,
        imdbVotes: `${this.state.episode.imdbVotes}`,
        imdbID: `${this.state.episode.imdbID}`,
        imdbSeriesID: `${this.state.episode.imdbSeriesID}`,
        justWatchUrl: `https://www.justwatch.com/us/search?q=${this.props.showTitle}`
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  render() {
    let episodeForm
    if (this.state.episode.Title) {
      episodeForm = <EpisodeForm
          handleSave={this.handleSave}
          episode={this.state.episode}
        />
    }
    const { open } = this.state;
    return (
      <div>
        <Button
          onClick={() => this.setState({ open: !open })}
          aria-controls="new-episode"
          aria-expanded={open}
        >
          Add an episode
        </Button>
        <Collapse in={this.state.open}>
          <div id="new-episode">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group md="4">
                <Form.Label>Season</Form.Label>
                <Form.Control
                  type="text"
                  name="season"
                  onChange={this.handleSeasonChange}
                />
              </Form.Group>

              <Form.Group md="4">
                <Form.Label>Episode</Form.Label>
                <Form.Control
                  type="text"
                  name="released"
                  onChange={this.handleEpisodeNumberChange}
                />
              </Form.Group>
              <Button type="submit">Review Selected Episode</Button>
            </Form>
            {episodeForm}
          </div>
        </Collapse>
      </div>
    );
  }
}

export default NewEpisode;
