import React from "react";

class ClassCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.inc = this.inc.bind(this);
  }

  inc(val) {
    this.setState({ count: this.state.count + val });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.inc(+1)}>inc</button>
        <button onClick={() => this.inc(-1)}>dec</button>
      </div>
    );
  }
}

export default ClassCounter;


// ! Уже устаревший подход, разрабы React советуют func-компоненты и хуки