import React, { Component } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

class Header extends Component {
  render() {
    return (
      <header>
        <h2>Holiday Binge Buddy</h2>
        <img src={require('./logo.png')}
                        width="100%"
                        alt="logo"/>
        <Breadcrumb>
          <Breadcrumb.Item href="/">Shows</Breadcrumb.Item>
          <Breadcrumb.Item href="/holiday-binge-buddy/#/episodes">Episodes</Breadcrumb.Item>
          <Breadcrumb.Item href="/#/show/add">Add a Show</Breadcrumb.Item>
        </Breadcrumb>
      </header>
    );
  }
}

export default Header;
