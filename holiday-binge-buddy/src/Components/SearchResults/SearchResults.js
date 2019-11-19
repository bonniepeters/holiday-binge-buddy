import React, { Component } from "react";

class SearchResults extends Component {
    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;
    }
    componentWillUnmount() {
        this._isMounted = false;
      }
    render() {
        let shows = this.props.searchResults.map(show => {
            return (
                <>
                    <h3 onClick={this.props.handleChoice}
                        id={show.imdbID}>{show.Title}</h3>
                    <p>{show.Year}</p>
                    <img
                        width={200}
                        src={show.Poster}
                        alt="show poster"
                        className="mr-3"
                        onClick={this.props.handleChoice}
                        id={show.imdbID}
                    />
                </>
            );
        });
        return (
            <div className="searchResults">
                {shows}
            </div>
        );
    }
}

export default SearchResults;