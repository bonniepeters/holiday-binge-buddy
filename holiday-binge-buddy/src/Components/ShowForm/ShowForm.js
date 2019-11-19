import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class ShowForm extends Component {
  render() {
    return (
      <div className="showForm">
        <Form onSubmit={this.props.handleSave}>
          <Button type="submit">Save</Button>
          <Form.Group md="4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="title"
              value={this.props.show.Title}
            />
          </Form.Group>
          <img
            width={150}
            src={this.props.show.Poster}
            alt="show poster"
            className="mr-3"
          />
          <Form.Group md="4">
            <Form.Label>Broadcasted</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="year"
              value={this.props.show.Year}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Genre</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="genre"
              value={this.props.show.Genre}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>Plot</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="plot"
              value={this.props.show.Plot}
            />
          </Form.Group>
          <Form.Group md="4">
            <Form.Label>totalSeasons</Form.Label>
            <Form.Control
              disabled
              type="text"
              name="totalSeasons"
              value={this.props.show.totalSeasons}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default ShowForm;
