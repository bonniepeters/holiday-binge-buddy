import React, { Component } from 'react';
import axios from 'axios';
import Media from 'react-bootstrap/Media';
import { Link } from 'react-router-dom';

class Shows extends Component {
    constructor() {
        super();
        this.state = {
            shows: [],
        };
    }

    componentDidMount() {
        let showsUrl = 'https://holiday-binge-buddy.herokuapp.com/shows?format=json';
        axios.get(showsUrl).then(res => {
            this.setState({ shows: res.data })
        });
    }

    render() {
        let list = this.state.shows.map(show => {
            return (
                <Media as="li" key={show.id}>
                    <img
                        width={150}
                        src={show.Poster}
                        alt="show poster"
                        className="mr-3"
                    />
                    <Media.Body>
                        <Link to={'/holiday-binge-buddy/#/shows/' + show.id}><h3>{show.Title}</h3></Link>
                        <p>{show.Plot}</p>
                    </Media.Body>
                </Media>
            )
        })
        return (
            <div>
                <ul className="list-unstyled">{list}</ul>
            </div>
        )
    }
}

export default Shows;