import React, { Component } from 'react';
import axios from 'axios';
import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';

class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {episodes: []};
    }

    componentDidMount() {
        let episodesUrl = 'https://holiday-binge-buddy.herokuapp.com/episodes?format=json';
        axios.get(episodesUrl).then(res => {
            this.setState({ episodes: res.data })
        });
    }

    render() {
        let list = this.state.episodes.map(episode => {
            return (
                <Media as="li" key={episode.id}>
                    <img
                        width={150}
                        src={episode.Poster}
                        alt="episode poster"
                        className="mr-3"
                    />
                    <Media.Body>
                        <Link to={'/holiday-binge-buddy/#/episodes/' + episode.id}><h3>{episode.Title}</h3></Link>
                        <p>{episode.Plot}</p>
                    </Media.Body>
                </Media>
            )
        })
        return (
            <div>
                <ul>{list}</ul>
            </div>
        )
    }
}

export default Episodes;