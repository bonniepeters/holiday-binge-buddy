import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
import NewEpisode from "../NewEpisode/NewEpisode";

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showId: this.props.match.params.id,
      show: {},
      episodes: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    e.preventDefault();
    axios.delete(
      `https://holiday-binge-buddy.herokuapp.com/shows/${this.state.showId}`
    );
  }
  componentDidMount() {
    axios
      .get(
        `https://holiday-binge-buddy.herokuapp.com/shows/${this.state.showId}`
      )
      .then(res => {
        this.setState({ show: res.data, episodes: res.data.episodes });
      });
  }
  render() {
    let listEpisodes = this.state.episodes.map(episode => {
      return (
        <li>
          <Link to={"/holiday-binge-buddy/#/episodes/" + episode.id}>
            <h5>
              S{episode.Season}/E{episode.Episode} - {episode.Title}
            </h5>
          </Link>
          <img
            width={200}
            src={episode.Poster}
            alt="show poster"
            className="mr-3"
          />
        </li>
      );
    });
    console.log(this.state.show)
    return (
      <div>
        <h3>{this.state.show.Title}</h3>
        <p>
          {this.state.show.Genre} | {this.state.show.Year} |{" "}
          {this.state.show.totalSeasons} Seasons <br />
          <a target="blank" href={this.state.show.justWatchUrl}>
            See where it's streaming!
          </a>
        </p>
        <p>
          {this.state.show.imdbRating}/10 | {this.state.show.imdbVotes}
        </p>
        <img
          width={200}
          src={this.state.show.Poster}
          alt="show poster"
          className="mr-3"
        />
        <p>{this.state.show.Plot}</p>
        <h4>Holiday Episodes</h4>
        <NewEpisode showImdbId={this.state.show.imdbID} showID={this.state.showId} showTitle={this.state.show.Title}/>
        <ul>{listEpisodes}</ul>
        <Button variant="danger" onClick={this.handleDelete}>
          Delete
        </Button>
      </div>
    );
  }
}

export default Show;
