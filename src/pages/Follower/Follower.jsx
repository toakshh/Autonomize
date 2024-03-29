import { useNavigate, useParams } from "react-router-dom";
import { useFollowerListQuery } from "../../redux/features/api/fetchUserData";
import { useDispatch } from "react-redux";
import { setUserInput } from "../../redux/features/userInput/userInputSlice";
import "./Follower.css";
const Follower = () => {
  const { userName } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useFollowerListQuery(userName);
  if (isLoading) return <h3>Loading...</h3>;
  if (isError)
    return (
      <h5>Something went wrong in fetching data. Please try again later.</h5>
    );
  const handleRepoData = (name) => {
    dispatch(setUserInput(name.login));
    navigate("/");
  };
  return (
    <div className="followerMain">
      {data?.map((follower) => {
        return (
          <div className="userBox" key={follower.id}>
            <img
              className="userImage"
              src={follower.avatar_url}
              alt="follower image"
            />
            <div>
              <h4>{follower.login}</h4>
              <h6>type: {follower.type}</h6>
              <button
                className="followerBtn"
                onClick={() => handleRepoData(follower)}
              >
                Repo
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Follower;
