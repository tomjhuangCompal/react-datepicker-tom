import React, { Component } from "react";
import DatePicker from "/Users/tomj/Desktop/pro/react-datepicker-tom";

import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
  state = {
    startDate: new Date(),
  };

  render() {
    const { startDate } = this.state;
    return <DatePicker selected={startDate} onChange={this.handleChange} />;
  }

  handleChange = (startDate) => {
    this.setState({
      startDate,
    });
  };
}

export default App;
