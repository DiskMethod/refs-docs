import React from "react";

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.myRef.current);
  }

  render() {
    return <div ref={this.myRef} />;
  }
}

export default MyComponent;
