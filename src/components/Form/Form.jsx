import { useState, useRef } from "react";
import "./Form.css";
import { useUserDetailQuery } from "../../redux/features/api/fetchUserData";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";

const Form = () => {
  const userRef = useRef();
  const [inputVal, setInputVal] = useState("");
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const { data, isLoading, isError } = useUserDetailQuery(
    shouldSubmit ? userRef.current.value : undefined
  );
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputVal) return;
    setShouldSubmit(true);
    dispatch(setUser(data));
  };
  const handleChange = () => {
    setInputVal(userRef.current.value);
    setShouldSubmit(false);
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
