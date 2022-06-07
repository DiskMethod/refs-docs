import React, { useRef } from "react";

function CustomTextInputFunction(props) {
  const textInput = useRef();

  function handleClick(e) {
    textInput.current.focus();
  }

  return (
    <div>
      <input type="text" ref={textInput} />
      <input type="button" value="Focus the text input" onClick={handleClick} />
    </div>
  );
}

export default CustomTextInputFunction;
