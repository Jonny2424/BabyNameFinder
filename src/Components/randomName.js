import React, { Component } from "react";
import { Button } from "antd";

class App2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      img: "",
      fname: "",
      lname: "",
      gender: "male",
    };
  }

  onChange = (event) => {
    this.setState({ lname: event.target.value });
  };

  handleOptionChange = (changeEvent) => {
    this.setState({
      gender: changeEvent.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const url = `https://randomuser.me/api/?gender=${this.state.gender}`;
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => this.setState({ fname: data.results[0].name.first, lname: event.target.value }))
      .catch((e) => console.log("error", e));
      console.log(this.state.lname);
  };

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <div className="lastName">
            <input
              type="text"
              name="lname"
              placeholder="Enter Last Name"
              onChange={this.onChange}
            ></input>
          </div>
          <div className="form-check">
            <label>
              <input
                type="radio"
                name="react-tips"
                value="male"
                checked={this.state.gender === "male"}
                onChange={this.handleOptionChange}
              />
              Male
            </label>
            </div>
            <div className="form-check">
              <label>
                <input
                  type="radio"
                  name="react-tips"
                  value="female"
                  checked={this.state.gender === "female"}
                  onChange={this.handleOptionChange}
                />
                Female
              </label>
            </div>
          <div className="Btn">
            <button>Find name!</button>
          </div>
        </form>
        <div>
          <h2>
            {this.state.fname} {this.state.lname}{" "}
          </h2>
        </div>
      </div>
    );
  }
}

export default App2;
