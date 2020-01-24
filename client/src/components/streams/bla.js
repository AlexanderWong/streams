import React, { Component } from "react";
import axios from "axios";

export default class bla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };

    this.toggleOrder = this.toggleOrder.bind(this);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(post =>
      this.setState({
        data: post.data
      })
    );
  }
  toggleOrder() {
    this.setState({ data: this.state.data.reverse() });
  }

  render() {
    return (
      <div>
        <button onClick={this.toggleOrder}> Click Me </button>
        <div>
          {this.state.data.map(post => {
            return (
              <div key={post.id}>
                {post.id} , {post.title}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
