import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Collapse } from "react-bootstrap";

class AddEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: this.props.showID,
      title: "N/A",
      released: "N/A",
      season: 1,
      episode: 10,
      runtime: "N/A",
      plot: "N/A",
      poster: "N/A",
      rating: 5.0,
      votes: "N/A",
      imdbID: "N/A",
      imdbSeriesID: "N/A",
      url: "N/A",
      open: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleReleasedChange = this.handleReleasedChange.bind(this);
    this.handleSeasonChange = this.handleSeasonChange.bind(this);
    this.handleEpisodeChange = this.handleEpisodeChange.bind(this);
    this.handleRuntimeChange = this.handleRuntimeChange.bind(this);
    this.handlePlotChange = this.handlePlotChange.bind(this);
    this.handlePosterChange = this.handlePosterChange.bind(this);
    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleVoteChange = this.handleVoteChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
  }
  handleTitleChange(e) {
    this.setState({ title: e.target.value });
  }
  handleReleasedChange(e) {
    this.setState({ released: e.target.value });
  }
  handleSeasonChange(e) {
    this.setState({ season: e.target.value });
  }
  handleEpisodeChange(e) {
    this.setState({ episode: e.target.value });
  }
  handleRuntimeChange(e) {
    this.setState({ runtime: e.target.value });
  }
  handlePlotChange(e) {
    this.setState({ plot: e.target.value });
  }
  handlePosterChange(e) {
    this.setState({ poster: e.target.value });
  }
  handleRatingChange(e) {
    this.setState({ rating: e.target.value });
  }
  handleVoteChange(e) {
    this.setState({ votes: e.target.value });
  }
  handleUrlChange(e) {
    this.setState({ url: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "post",
      url: "https://holiday-binge-buddy.herokuapp.com/episode/add",
      data: {
        "show": `${this.state.show}`,
        "Title": `${this.state.title}`,
        "Released": `${this.state.released}`,
        "Season": `${this.state.season}`,
        "Episode": `${this.state.episode}`,
        "Runtime": `${this.state.runtime}`,
        "Plot": `${this.state.plot}`,
        "Poster": `${this.state.poster}`,
        "imdbRating": `${this.state.rating}`,
        "imdbVotes": `${this.state.votes}`,
        "imdbID": `${this.state.imdbID}`,
        "imdbSeriesID": `${this.state.imdbSeriesID}`,
        "justWatchUrl": `${this.state.url}`
      },
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
              <Button
        onClick={() => this.setState({ open: !open })}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
        Add an episode
      </Button>
      <Collapse in={this.state.open}>
        <div id="example-collapse-text">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group md="4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="title"
              onChange={this.handleTitleChange}
            />
          </Form.Group>{" "}
          <Form.Group md="4">
            <Form.Label>Released</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="released"
              onChange={this.handleReleasedChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Season</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="season"
              onChange={this.handleSeasonChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Episode</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="episode"
              onChange={this.handleEpisodeChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Runtime</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="runtime"
              onChange={this.handleRuntimeChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Plot</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="plot"
              onChange={this.handlePlotChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Poster</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="poster"
              onChange={this.handlePosterChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>imdbRating</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="imdbRating"
              onChange={this.handleRatingChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>imdbVotes</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="imdbVotes"
              onChange={this.handleVoteChange}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>justWatchUrl</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="justWatchUrl"
              onChange={this.handleUrlChange}
            />
          </Form.Group>
          <Button type="submit">Submit</Button>
            </Form>
            </div>
      </Collapse>
      </div>
    );
  }
}

export default AddEpisode;
