import "./Body.css";
import { useSelector } from "react-redux";
import { useUserRepoQuery } from "../../redux/features/api/fetchUserData";
import UserInfo from "../../components/UserInfo/UserInfo";

const Body = () => {
  const userInput = useSelector((state) => state.input.value);
  // console.log(userInput);
  const { data, isLoading, isError } = useUserRepoQuery(userInput, {
    skip: !userInput,
  });

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h4>Something went wrong. Please try again.</h4>;

  return (
    <div className="bodyMain">
      <UserInfo />
      {data?.map((repo) => {
        // console.log(repo);
        return (
          <div className="repoBoxes" key={repo.id}>
            <div>
              <img
                className="userImage"
                src={repo.owner.avatar_url}
                alt={`${repo.name}'s image`}
              />
            </div>
            <div>
              <h5 title={repo.name}>{repo?.name}</h5>
              <p title={repo.description}>{repo?.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Body;
