import React from "react";

function MyFunctionComponent() {
  return <input />;
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  componentDidMount() {
    // current is null since you can't use the ref attribute on functional components
    console.log(this.textInput.current);
  }

  render() {
    return <MyFunctionComponent ref={this.textInput} />;
  }
}

export default Parent;
