import React, { Component } from "react";
class ChildComponent extends Component {
  state = {};

  render() {
    const imageStyle = {
      width: "100%"
    };
    const textStyle = {
      width: "100%",
      display: "block",
      textAlign: "left",
      fontSize: "18px"
    };
    const maleBorder = {
      border: "3px solid blue",
      width: "100%"
    };
    const femaleBorder = {
      border: "3px solid pink",
      width: "100%"
    };
    const gender = this.props.gender;
    if (gender === "male") {
      return (
        <React.Fragment>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <img
              style={maleBorder}
              src={this.props.image}
              alt={this.props.name}
            />
            <br />
            <span className="titleContent" style={textStyle}>
              {this.props.name}
            </span>

            <span className="titleContent" style={textStyle}>
              {this.props.job}
            </span>

            <span className="titleContent" style={textStyle}>
              {this.props.type}
            </span>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div className="col-md-3 col-sm-12 col-xs-12">
            <img
              style={femaleBorder}
              src={this.props.image}
              alt={this.props.name}
            />
            <br />
            <span className="titleContent" style={textStyle}>
              {this.props.name}
            </span>

            <span className="titleContent" style={textStyle}>
              {this.props.job}
            </span>

            <span className="titleContent" style={textStyle}>
              {this.props.type}
            </span>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ChildComponent;
