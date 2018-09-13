import React, { Component } from "react";
import "./Welcome.css";

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
      displayWelcome: true
    };
  }

  toggleWelcome() {
    window.setTimeout(() => {
      this.setState({ displayWelcome: !this.state.displayWelcome });
    }, 1500);
  }

  render() {
    if (this.state.displayWelcome) {
      return (
        <div>
          {this.toggleWelcome()}
          <h1 className="welcome">welcome</h1>
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default Welcome;
