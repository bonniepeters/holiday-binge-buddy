import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Collapse } from "react-bootstrap";

class AddEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: 1,
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
    this.handleDelete = this.handleDelete.bind(this);
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
  handleDelete(e) {
    e.preventDefault();
      axios.delete(`https://holiday-binge-buddy.herokuapp.com/episodes/${this.props.episodeId}`);
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
      method: "put",
      url: `https://holiday-binge-buddy.herokuapp.com/episodes/${this.props.episodeId}`,
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
  componentDidMount() {
    axios
      .get(
        `https://holiday-binge-buddy.herokuapp.com/episodes/${this.props.episodeId}`
      )
      .then(res => {
        this.setState({ 
          show: res.data.show,
          title: res.data.Title,
          released: res.data.Released,
          season: res.data.Season,
          episode: res.data.Episode,
          runtime: res.data.Runtime,
          plot: res.data.Plot,
          poster: res.data.Poster,
          rating: res.data.imdbRating,
          votes: res.data.imdbVotes,
          imdbID: res.data.imdbID,
          imdbSeriesID: res.data.imdbSeriesID,
          url: res.data.justWatchUrl
         });
      });
  }
  render() {
    const { open } = this.state;
    return (
      <div>
              <Button
        onClick={() => this.setState({ open: !open })}
        aria-controls="edit-form"
        aria-expanded={open}
      >
        Edit this episode
      </Button>
      <Collapse in={this.state.open}>
        <div id="edit-form">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group md="4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="title"
                  onChange={this.handleTitleChange}
                  value={this.state.title}
            />
          </Form.Group>{" "}
          <Form.Group md="4">
            <Form.Label>Released</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="released"
                  onChange={this.handleReleasedChange}
                  value={this.state.released}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Season</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="season"
                  onChange={this.handleSeasonChange}
                  value={this.state.season}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Episode</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="episode"
                  onChange={this.handleEpisodeChange}
                  value={this.state.episode}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Runtime</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="runtime"
                  onChange={this.handleRuntimeChange}
                  value={this.state.runtime}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Plot</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="plot"
                  onChange={this.handlePlotChange}
                  value={this.state.plot}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Poster</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="poster"
                  onChange={this.handlePosterChange}
                  value={this.state.poster}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>imdbRating</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="imdbRating"
                  onChange={this.handleRatingChange}
                  value={this.state.rating}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>imdbVotes</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="imdbVotes"
                  onChange={this.handleVoteChange}
                  value={this.state.votes}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>justWatchUrl</Form.Label>
            <Form.Control
              type="text"
              placeholder="optional"
              name="justWatchUrl"
                  onChange={this.handleUrlChange}
                  value={this.state.url}
            />
          </Form.Group>
              <Button type="submit">Submit</Button>
              <Button variant="danger" onClick={this.handleDelete}>
          Delete
        </Button>
            </Form>
            </div>
      </Collapse>
      </div>
    );
  }
}

export default AddEpisode;
