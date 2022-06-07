import React, { useEffect } from "react";

// function FancyButton(props) {
//   return <button className="FancyButton">{props.children}</button>;
// }

function logProps(Component) {
  function LogProps(props) {
    useEffect(() => {
      console.log("props:", props);
    });

    const { forwardedRef, ...rest } = props;

    return <Component ref={forwardedRef} {...rest} />;
  }

  return React.forwardRef((props, ref) => {
    return <LogProps {...props} forwardedRef={ref} />;
  });
}

const FancyButton = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} className="FancyButton">
      {props.children}
    </button>
  );
});

export default logProps(FancyButton);
