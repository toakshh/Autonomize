import { useState, useRef } from "react";
import "./Form.css";
import { useUserDetailQuery } from "../../redux/features/api/fetchUserData";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";
import { setUserInput } from "../../redux/features/userInput/userInputSlice";

const Form = () => {
  const userRef = useRef();
  const [inputVal, setInputVal] = useState("");

  const { data } = useUserDetailQuery(inputVal, {
    skip: !inputVal,
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchVal = userRef.current.value;
    if (!inputVal) return;
    dispatch(setUser(data));
    dispatch(setUserInput(searchVal));
  };
  const handleChange = () => {
    const searchVal = userRef.current.value;
    setInputVal(searchVal);
  };

  return (
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
  );
};

export default Form;
