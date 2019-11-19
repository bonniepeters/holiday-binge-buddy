import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group md="4">
            <Form.Control
              type="text"
              placeholder="Enter the name of the show you would like to add"
              name="search"
              onChange={this.props.handleFilter}
              value={this.props.searchFilter}
            />
          </Form.Group>
          <Button type="submit">Search</Button>
        </Form>
      </div>
    );
  }
}

export default SearchBar;