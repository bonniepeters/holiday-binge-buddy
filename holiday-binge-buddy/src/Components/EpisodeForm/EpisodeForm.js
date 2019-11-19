import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class EpisodeForm extends Component {
  render() {
    return (
      <div className="episodeForm">
        <Form onSubmit={this.props.handleSave}>
          <Button type="submit">Save</Button>
          <Form.Group md="4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="title"
              value={this.props.episode.Title}
            />
          </Form.Group>
          <img
            width={150}
            src={this.props.episode.Poster}
            alt="episode poster"
            className="mr-3"
          />
          <Form.Group md="4">
            <Form.Label>Plot</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="plot"
              value={this.props.episode.Plot}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default EpisodeForm;
