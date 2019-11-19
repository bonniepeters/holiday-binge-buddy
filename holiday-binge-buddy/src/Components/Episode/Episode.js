import React, { Component } from "react";
import axios from 'axios';
import EditEpisode from '../Edit-Episode-Form/Edit-Episode-Form';

class Episode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			episodeId: this.props.match.params.id,
            episode: {}
    };
	}
	componentDidMount() {
		axios.get(`https://holiday-binge-buddy.herokuapp.com/episodes/${this.state.episodeId}`).then(res => {
			this.setState({ episode: res.data });
		});
	}
    render() {
      return (
          <div>
              <h3>{this.state.episode.Title}</h3>
              <p>
                  {this.state.episode.Released} | S{this.state.episode.Season}/E{this.state.episode.Episode} | {this.state.episode.Runtime}
                  <br />
                  <a target="blank" href={this.state.episode.justWatchUrl}>See where it's streaming!</a>
              </p>
              <p>
                {this.state.episode.imdbRating}/10 | {this.state.episode.imdbVotes}
              </p>
              <img
                width={200}
                src={this.state.episode.Poster}
                alt="episode poster"
                className="mr-3"
              />
              <p>
              {this.state.episode.Plot}
          </p>
        <EditEpisode episodeId={this.state.episodeId}></EditEpisode>
          </div>
      )
  }
}

export default Episode;