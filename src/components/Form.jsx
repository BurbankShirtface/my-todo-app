import React from "react";

function Form({ setInputText, inputText, todos, setTodos }) {
  function handleInputChange(e) {
    setInputText(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, { text: inputText, id: Math.random() * 1000 }]);
    setInputText("");
  }
  return (
    <form className="form-container">
      <input
        onChange={handleInputChange}
        value={inputText}
        className="form-text-input"
        type="text"
      ></input>
      <button onClick={handleSubmit} className="form-submit">
        Add Todo
      </button>
    </form>
  );
}

export default Form;
