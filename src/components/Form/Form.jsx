import { useState } from "react";
import "./Form.css";
import { githubFetchURL } from "../../constants";
import useApi from "../../hooks/useApi";

const Form = () => {
  const [inputVal, setInputVal] = useState("");
  const [data, loading, error, fetchData] = useApi();
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(githubFetchURL + inputVal);
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
        required
      />
      <button className="formSubmit" type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
