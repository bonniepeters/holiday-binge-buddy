import React, { Component } from "react";
import axios from "axios";
import { Form, Button, Collapse } from "react-bootstrap";

class EditEpisode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plot: "",
      open: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePlotChange = this.handlePlotChange.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    axios.delete(
      `https://holiday-binge-buddy.herokuapp.com/episodes/${this.props.episodeId}`
    );
  }
  handlePlotChange(e) {
    this.setState({ plot: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    axios({
      method: "put",
      url: `https://holiday-binge-buddy.herokuapp.com/episodes/${this.props.episodeId}`,
      data: {
        show: `${this.props.episode.show}`,
        Title: `${this.props.episode.Title}`,
        Released: `${this.props.episode.Released}`,
        Season: `${this.props.episode.Season}`,
        Episode: `${this.props.episode.Episode}`,
        Runtime: `${this.props.episode.Runtime}`,
        Plot: `${this.state.plot}`,
        Poster: `${this.props.episode.Poster}`,
        imdbRating: `${this.props.episode.imdbRating}`,
        imdbVotes: `${this.props.episode.imdbVotes}`,
        imdbID: `${this.props.episode.imdbID}`,
        imdbSeriesID: `${this.props.episode.imdbSeriesID}`,
        justWatchUrl: `${this.props.episode.justWatchUrl}`
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
        this.setState({ plot: res.data.Plot });
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
                  disabled
                  type="text"
                  name="title"
                  value={this.props.episode.Title}
                />
              </Form.Group>
              <Form.Group md="4">
                <Form.Label>Plot</Form.Label>
                <Form.Control
                  type="text"
                  name="plot"
                  onChange={this.handlePlotChange}
                  value={this.state.plot}
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

export default EditEpisode;
