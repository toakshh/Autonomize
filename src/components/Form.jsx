import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [inputVal, setInputVal] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.search.value);
  };
  const handleChange = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        id="searchbox"
        value={inputVal}
        onChange={handleChange}
        className="userInput"
        placeholder="Enter a username"
      />
      <button className="formSubmit" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
