import React, { useRef, useEffect } from "react";

// import "./App.css";
// import MyComponent from "./components/MyComponent";
// import CustomTextInput from "./components/CustomTextInput";
// import AutoFocusTextInput from "./components/AutoFocusTextInput";
// import Parent from "./components/MyFunctionComponent";
// import CustomTextInputFunction from "./components/CustomTextInputFunction";
import FancyButton from "./components/FancyButton";

function App() {
  const ref = useRef();

  useEffect(() => {
    console.log(ref.current);
  }, []);

  return (
    <>
      <FancyButton ref={ref}>Click me!</FancyButton>
    </>
  );
}

export default App;
