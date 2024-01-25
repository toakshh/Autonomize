import { useState, useRef } from "react";
import "./Form.css";
import { useUserDetailQuery } from "../../redux/features/api/fetchUserData";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";
import { setUserInput } from "../../redux/features/userInput/userInputSlice";
import { Link, useNavigate } from "react-router-dom";

const Form = () => {
  const userRef = useRef();
  const [inputVal, setInputVal] = useState("");

  const { data } = useUserDetailQuery(inputVal, {
    skip: !inputVal,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/");
    e.preventDefault();
    const searchVal = userRef.current.value;
    if (!inputVal) return;
    dispatch(setUser(data));
    dispatch(setUserInput(searchVal));
    setInputVal("");
  };
  const handleChange = () => {
    const searchVal = userRef.current.value;
    setInputVal(searchVal);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "10px",
      }}
    >
      <Link className="homeLink" to="/">
        Home
      </Link>
      <form onSubmit={handleSubmit}>
        <input
          ref={userRef}
          type="text"
          name="search"
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
    </div>
  );
};

export default Form;
